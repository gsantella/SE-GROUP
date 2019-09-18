import express from 'express';

const app = express();
const port = 3000;

const data = {
  status: 'success',
};

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api', (req, res) => res.json(data));

app.listen(port);
