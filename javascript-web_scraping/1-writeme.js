#!/usr/bin/node

const fs = require('fs');
const process = require('process');

if (process.argv.length <= 3) {
    console.log("Usage: ./1-writeme.js <file_path> <string_to_write>");
    process.exit(-1);
}

const frilePath = process.argv[2];
const string_to_write = process.argv[3];


fs.writeFile(filePath, stringToWrite, 'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content written to ${filepath}');
});
