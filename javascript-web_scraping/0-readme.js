#!/usr/bin/node

const fs = require('fs');

// Function that reads a file and prints its content
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Printing the error if an error occurred
            console.error(err);
        } else {
            // Printing the content
            console.log(data);
        }
    });
}


const filePath = process.argv[2];

// Calling the function with the provided file path
readFileContent(filePath);