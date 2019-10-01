/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const port = 3000;


// routes
app.get('/data', (req, res) => {
  const db = new sqlite.Database('./emailerDb.sqlite');

  db.all("SELECT * FROM emails WHERE DATE('now') < emails.date;", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

/* eslint-disable indent */


const db = new sqlite.Database('./emailerDb.sqlite');

app.post('/data', jsonParser, (req, res) => {
    const data = {};
    data.fName = req.body.fName;
    data.lName = req.body.lName;
    data.email = req.body.email;
    data.msg = req.body.msg;
    data.date = req.body.expirationDate;
    data.recieverName = req.body.recieverName;
    data.recieverEmail = req.body.recieverEmail;
    const sql = `INSERT INTO emails(fName, lName, email, msg, date, recieverName, recieverEmail) VALUES('${data.fName}', '${data.lName}', '${data.email}', '${data.msg}', '${data.date}', '${data.recieverName}', '${data.recieverEmail}')`;
    db.run(sql);
    res.json(data);
  });

app.use(cors());

// app.use(bodyParser.json());
app.listen(port);
