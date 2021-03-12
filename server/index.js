const express = require('express');
const path = require('path');
//const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static('client/dist'));


app.get('/resume', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../files/Andrew Vance Resume.pdf'));

})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});