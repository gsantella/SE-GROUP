const express = require('express');
const request = require('request');

const hostname = 'https://api.myjson.com/bins/zza7l';
const app = express();
const port = 3001;

request.get(hostname, (error, response, body) => {
  const json = JSON.parse(body);
  console.log(json);
});

app.listen(port);
