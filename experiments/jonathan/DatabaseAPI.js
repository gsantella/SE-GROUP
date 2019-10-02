// Use this file to separate the Database call and mailgun api
const request = require('request');

const hostname = 'https://api.myjson.com/bins/1gpwqd';

let name = '';
let email = '';
let message = '';

request.get(hostname, (error, response, body) => {
  // get json
  const json = JSON.parse(body);

  // set variables to the json objects
  name = json.name;
  email = json.email;
  message = json.Message;

  /* console.log(name);
  console.log(email);
  console.log(message); */
});

// export to mailgun api file
module.exports = {
  name,
  email,
  message,
};

// app.listen(port);
