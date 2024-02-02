const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function countStudents(filePath) {
  try {
    const data = await readFile(filePath, { encoding: 'utf8' });
    let lines = data.split('\n');

    // Removing any empty lines and the header
    lines = lines.filter((line) => line.length > 0 && !line.startsWith('firstname'));

    const students = lines.map((line) => {
      const [firstname, , field] = line.split(',');
      return { firstname, field };
    });

    const cs = students.filter((student) => student.field === 'CS').map((student) => student.firstname);
    const swe = students.filter((student) => student.field === 'SWE').map((student) => student.firstname);

    return `This is the list of our students\nNumber of students: ${students.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const filePath = process.argv[2]; // Getting the database name from the command line argument
      const studentsInfo = await countStudents(filePath);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(1245);

module.exports = app;
