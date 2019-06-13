const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3004;
const service = process.env.REACT_APP_NODEMAILER_SERVICE;
const host = process.env.REACT_APP_NODEMAILER_HOST;
const user = process.env.REACT_APP_NODEMAILER_USER;
const pass = process.env.REACT_APP_NODEMAILER_PASSWORD;
const from = process.env.REACT_APP_NODEMAILER_FROM;
const to = process.env.REACT_APP_NODEMAILER_TO;
const subject = process.env.REACT_APP_NODEMAILER_SUBJECT;
const text = process.env.REACT_APP_NODEMAILER_TEXT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", (req, res) => {
  res.send("success");
  console.log(req.body);
  console.log("heloo");

  // const output = `
  // <p>You have a new message</p>
  // <h3>Contact details
  // <ul>
  // <li> Name:${req.body.name}</li>
  // <li> Email:${req.body.email}</li>
  // </ul> <h5> ${req.body.message}</h5>
  // </h3>`;

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
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("home", { msg: "Email has been send" });
  });
});

// app.get("/send", (req, res) => {
//   res.send("Thanks for your form");
// });

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
