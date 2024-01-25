#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;
request.get(url + id, function (err, response, body) {
    if (err) {
        console.log(err);
    }
    const data = JSON.parse(body);
    const dd = data.characters;
    for (const i in dd) {
        request.get(dd[i], function (err, response, body1) {
            if (err) {
                console.log(err);
            }
            const data1 = JSON.parse(body1);
            console.log(data1.name);
        });
    }
});
