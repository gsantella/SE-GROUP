const mailgun = require('mailgun-js');

const DOMAIN = 'sandboxd03cde259d8a4ae9a9b9545b031c56b5.mailgun.org';
const mg = mailgun({ apiKey: 'c64987e47d9f8b851b28ae2975710ea9-baa55c84-93e9de32', domain: DOMAIN });
const data = {
  from: 'Mailgun Sandbox <postmaster@sandboxd03cde259d8a4ae9a9b9545b031c56b5.mailgun.org>',
  to: 'jsvitana@yahoo.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
mg.messages().send(data, (error, body) => {
  console.log(body);
});

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
