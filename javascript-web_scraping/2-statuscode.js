#!/usr/bin/node

// Write a script that display the status code of a GET request.
const request = require('request');
const url = process.argv[2];

// Get the status code
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log('code:', error && response.statusCode);
  }
});
