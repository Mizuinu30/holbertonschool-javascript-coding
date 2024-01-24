#!/usr/bin/node
// Print the title of a Star Wars movie where the episode number matches a given integer.
const request = require('request');
const MovieId = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + MovieId;
// Make a request to the URL
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
