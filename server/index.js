const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const mailerConfig = require('./mailerConfig.js');
//const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static('client/dist'));


app.get('/resume', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../files/Andrew Vance Resume.pdf'));

});

app.post('/email', async (req, res) => {

  let testAccount = await nodemailer.createTestAccount();

  let transport = nodemailer.createTransport(mailerConfig);

  transport.sendMail({
    from: 'andrewaddress2@gmail.com', // sender address
    to: "andrewaddress2@gmail.com", // list of receivers
    subject: req.body.name + ' || ' + req.body.email,
    text: req.body.message
  }, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).end();
    }
  });

});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});