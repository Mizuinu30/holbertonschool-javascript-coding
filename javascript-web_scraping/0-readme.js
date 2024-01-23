#!/usr/bin/node

const fs = require('fs');
const process = require('process');

// Check if the file path is provided as an argument
if (process.argv.length <= 2) {
    console.log("Please provide the file path as an argument.");
    process.exit(-1);
}
// Get the file path
const filePath = process.argv[2];
// Read the file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
