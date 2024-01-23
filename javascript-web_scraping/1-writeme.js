#!/usr/bin/node

const fs = require('fs');
const process = require('process');

if (process.argv.length <= 2) {
    console.log("Usage: ./0-readme.js <file_path>");
    process.exit(-1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
