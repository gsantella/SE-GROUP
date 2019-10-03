/* eslint-disable no-console */
const request = require('request');
const mailgun = require('mailgun-js');
const settings = require('./api.js');

// Separate API call from MailGun call
const hostname = 'http://127.0.0.1:3000/data';
let fName = '';
let lName = '';
let senderEmail = '';
let recieverEmail = '';
let recieverName = '';
let message = '';
let date = '';

function mailGun() {
  const DOMAIN = 'sandbox2c45fa8a8587484f9dafc00d51afb0f5.mailgun.org';
  const mg = mailgun({ apiKey: settings.mailGunKey, domain: DOMAIN });
  const data = {
    from: 'Jonathan Svitana <jonathansvitana@gmail.com>',
    to: recieverEmail,
    subject: recieverName,
    text: message,
  };
  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
}

request.get(hostname, (error, response, body) => {
  // get json
  const json = JSON.parse(body);

  // set variables to the json objects
  fName = json.fName;
  lName = json.lName;
  senderEmail = json.email;
  recieverEmail = json.recieverEmail;
  recieverName = json.recieverName;
  message = json.msg;
  date = json.date;

  console.log(fName);
  // mailGun();
});
