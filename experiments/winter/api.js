/* eslint-disable indent */
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3');

const app = express();
const port = 3000;

const db = sqlite.Database('./emailerDb.sqlite');

app.get('/data/post', (req, res) => {
    const data = {};
    data.status = 'success';
    data.name = ;
    data.email = ;
    data.msg = ;
    //insomnia rest insomnia.rest
    res.json(data);
  });

app.use(cors());

app.listen(port);
