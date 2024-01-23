#!/usr/bin/node
const request = require('request');
const process = process.argv[2];
// Make a GET request to the URL
if (process.argv.length <= 2) {
    console.log('Usage: node 2-statuscode.js <URL>');
    process.exit(-1);
}
// Move the declaration of 'url' outside of the block scope
const url = process.argv[2];
// Make a GET request to the URL
request(url, (error, response, body) => {
    if (error) {
        console.log('error:', error);
        return;
    }
    console.log('code:', response.statusCode);
});
