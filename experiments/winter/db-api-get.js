/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;

// routes
app.get('/data/get', (req, res) => {
  const db = sqlite.Database('./emailerDb.sqlite');

  db.all("SELECT * FROM names WHERE start < date(now)", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

app.use(cors());

app.listen(port);
