/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;


// routes
app.get('/data', (req, res) => {
  const db = new sqlite.Database('./emailerDb.sqlite');

  // not working! should not be showing any results
  db.all("SELECT * FROM emails", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

/* eslint-disable indent */
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const db = new sqlite.Database('./emailerDb.sqlite');

app.post('/data', express.json, (req, res) => {
    const data = {};
    data.status = 'success';
    data.name = req.body.name;
    data.email = req.body.email;
    data.msg = req.body.msg;
    data.date = date;
    const sql = 'INSERT INTO emails(name, email, msg, date) VALUES(data.name, data.email, data.msg, data.date)';
    db.run(sql);
    res.json(data.succes);
  });

app.use(cors());

app.listen(port);
