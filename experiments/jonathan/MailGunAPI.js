/* eslint-disable no-console */
const request = require('request');
const mailgun = require('mailgun-js');
const settings = require('./api.js');

// Separate API call from MailGun call
const hostname = 'https://api.myjson.com/bins/1gpwqd';
let name = '';
let email = 'this';
let message = '';
const date = '';

function mailGun() {
  const DOMAIN = 'sandbox2c45fa8a8587484f9dafc00d51afb0f5.mailgun.org';
  const mg = mailgun({ apiKey: settings.mailGunKey, domain: DOMAIN });
  const data = {
    from: 'Jonathan Svitana <jonathansvitana@gmail.com>',
    to: email,
    subject: name,
    text: message,
  };
  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
}

// !!!!!!!!!!!!!!!!!!!make mailgun call after the request
request.get(hostname, (error, response, body) => {
  // get json
  const json = JSON.parse(body);

  // set variables to the json objects
  name = json.name;
  email = json.email;
  message = json.Message;

  mailGun();
});
