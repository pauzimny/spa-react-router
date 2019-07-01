const functions = require("firebase-functions");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors")({ origin: true });

const service = "gmail";
const host = functions.config().nodemailer.host;
const user = functions.config().nodemailer.user;
const pass = functions.config().nodemailer.pass;
const from = functions.config().nodemailer.from;
const to = functions.config().nodemailer.to;
const subject = functions.config().nodemailer.subject;
const text = functions.config().nodemailer.text;

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", (req, res) => {
  res.send("success");

  const output = `<p>You have new message </p>
  <h5>${req.body.message}</h5>`;

  let transporter = nodemailer.createTransport({
    name: service,
    service,
    host,
    // port: 587,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user, // generated ethereal user
      pass // generated
      // ethereal password
    },
    tls: {
      rejectedUnauthorized: false
    }
  });

  let mailOptions = {
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
});

exports.api = functions.https.onRequest(app);
