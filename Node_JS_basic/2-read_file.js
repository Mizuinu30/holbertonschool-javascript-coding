const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf8' });

    // Split the data into lines
    const lines = data.split('\n');

    // Remove any trailing empty lines
    const filteredLines = lines.filter((line) => line.trim() !== '');

    // Ignore the header
    const students = filteredLines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Create a map to keep track of fields and students
    const fieldMap = {};

    for (const field in fieldMap) {
      if (Object.prototype.hasOwnProperty.call(fieldMap, field)) {
        const studentList = fieldMap[field].map((student) => student.split(',')[0]).join(', ');
        console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
