const mailgun = require('mailgun-js');
const settings = require('./api.js');

const DOMAIN = 'sandbox2c45fa8a8587484f9dafc00d51afb0f5.mailgun.org';
const mg = mailgun({ apiKey: settings.mailGunKey, domain: DOMAIN });
const data = {
  from: 'Jonathan Svitana <jonathansvitana@gmail.com>',
  to: 'jonathansvitana@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
mg.messages().send(data, (error, body) => {
  console.log(body);
});

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
