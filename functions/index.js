const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});

//configure email & password
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;


//nodemailer transport object definition
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  },
})

//configure export
exports.submit = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }

      //configure mail options
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name.toUpperCase()} just messaged me from my Banging Mick DJ website`,
        text: req.body.message,
        html: `<p>Contact Name: ${req.body.name}</p>
               <p>Email: ${req.body.email}</p>
               <p>Number: ${req.body.number.length > 0 ? req.body.number : 'No contact number was provided 😔 ...but you can email back instead! 😀' }</p>
               <p>Message: ${req.body.message}</p>`
      }
      //send email
      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({
          isEmailSend: true
        })
        return
      })
    })
  }
})