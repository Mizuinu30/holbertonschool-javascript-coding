const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile('3-read_file_async.js', 'utf8');
    res.send(`This is the list of our students\n${data}`);
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

app.listen(1245);

module.exports = app;
