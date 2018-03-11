var nodemailer = require('nodemailer');
const config = require('../config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'wesleyheronfarias@gmail.com',
        pass: config.password
    }
});

let mailOptions = {
    from: 'wesleyheronfarias@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};