/* eslint-disable indent */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const db = new sqlite.Database('./emailerDb.sqlite');

app.post('/data', (req, res) => {
    const data = {};
    data.status = 'success';
    data.name = req.query.name;
    data.email = req.query.email;
    data.msg = req.query.msg;
    data.date = date;
    const sql = 'INSERT INTO emails(name, email, msg, date) VALUES(data.name, data.email, data.msg, data.date)';
    db.run(sql);
    res.json(data.succes);
  });

app.use(cors());

app.listen(port);
