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
  const DOMAIN = 'rm103.xyz';
  const mg = mailgun({ apiKey: settings.mailGunKey, domain: DOMAIN });
  const data = {
    from: senderEmail,
    to: 'jsvitana@yahoo.com',
    subject: recieverName,
    text: `From : ${fName} ${lName} At: ${date}\n${message}`,
  };
  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
}

request.get(hostname, (error, response, body) => {
  // get json
  const json = JSON.parse(body);

  // set variables to the json objects
  fName = json.data[3].fName;
  lName = json.data[3].lName;
  senderEmail = json.data[3].email;
  recieverEmail = json.data[3].recieverEmail;
  recieverName = json.data[3].recieverName;
  message = json.data[3].msg;
  date = json.data[3].date;

  console.log(fName);
  mailGun();
});
