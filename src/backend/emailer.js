/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const request = require('request');
const mailgun = require('mailgun-js');
const settings = require('./secrets.js');

// Separate API call from MailGun call
const hostname = settings.dataAPI;
let fName = '';
let lName = '';
let senderEmail = '';
let recieverEmail = '';
let recieverName = '';
let message = '';
let date = '';

function mailGun() {
  const DOMAIN = settings.mailGunDomain;
  const mg = mailgun({ apiKey: settings.mailGunAPIKey, domain: DOMAIN });
  const data = {
    from: senderEmail,
    to: recieverEmail,
    subject: recieverName,
    text: `From : ${fName} ${lName}\nAt: ${date}\n${message}`,
  };
  mg.messages().send(data, (error, body) => {
    console.log(body);
  });
}

request.get(hostname, (error, response, body) => {
  // get json
  const json = JSON.parse(body);

  for (let i = 0; i < json.data.length; i++) {
    // set variables to the json objects
    fName = json.data[i].fName;
    lName = json.data[i].lName;
    senderEmail = json.data[i].email;
    recieverEmail = json.data[i].recieverEmail;
    recieverName = json.data[i].recieverName;
    message = json.data[i].msg;
    date = json.data[i].date;

    mailGun();
  }
});
