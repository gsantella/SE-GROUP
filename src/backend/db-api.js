/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
  const db = new sqlite.Database('./db.sqlite');

  db.all("SELECT * FROM names", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

app.use(cors());

app.listen(port);
