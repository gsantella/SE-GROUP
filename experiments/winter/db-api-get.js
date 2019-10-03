/* eslint-disable quotes */
/* eslint-disable indent */

const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const port = 3000;
const db = new sqlite.Database('./emailerDb.sqlite');

// routes
app.get('/data', (req, res) => {
  const json = {};
  db.all("SELECT * FROM emails WHERE emails.date > strftime('%s', date);", (err, rows) => {
    json.data = rows;
    res.json(json);
  });

  db.close();
});

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
    db.run(sql, (err) => {
      if (err) {
          data.status = "fail";
      } else {
        data.status = "success";
      }
    });
    res.json(data);
    db.close();
  });

app.use(cors());
app.listen(port);
