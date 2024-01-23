#!/usr/bin/node
// Write a string to a file
const fs = require('fs');
// Check if the file path is provided as an argument
const filePath = process.argv[2];
const content = process.argv[3];
// Write the file
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});
