const express = require('express');
const app = express();
app.use(express.json());

let attendance = [];

app.post('/mark', (req, res) => {
  const { name } = req.body;
  attendance.push({ name, time: new Date() });
  res.send({ message: `${name} marked present` });
});

app.get('/list', (req, res) => {
  res.json(attendance);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
