#!/usr/bin/node

const fs = require('fs');
const process = require('process');

if (process.argv.length <= 3) {
    console.log("Usage: node script.js <file_path> <string_to_write>");
    process.exit(-1);
}

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Content written to ${filePath}`);
});
