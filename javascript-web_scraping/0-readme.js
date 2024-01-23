#!/usr/bin/node

const fs = require('fs');
const process = require('process');

if (process.argv.length <= 2) {
    console,log("Usage: " + __filename + " path/to/file");
}

const filepath = process.argv[2];

fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});