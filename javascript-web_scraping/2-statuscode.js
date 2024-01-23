#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
// Make a GET request to the URL
request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    console.log('code:', response && response.statusCode);
  }
});
