/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;

// routes
app.get('/data/get', (req, res) => {
  const db = new sqlite.Database('./emailerDb.sqlite');

  // not working! should not be showing any results
  db.all("SELECT * FROM emails WHERE date > DATE('now')", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

app.use(cors());

app.listen(port);
