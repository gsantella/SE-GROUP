/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/color', (req, res) => res.json({ color: Math.floor(Math.random() * 10) + 1 }));
app.get('/api', (req, res) => res.json({ status: 'success' }));
app.get('/temp', (req, res) => {
  const data = {};
  if (req.query.f) {
    const { f } = req.query;
    const c = (f - 32) * (5 / 9);
    data.status = 'success';
    data.result = c;
  } else {
    data.status = 'fail';
  }
  res.json(data);
});

app.use(cors());

app.listen(port);
