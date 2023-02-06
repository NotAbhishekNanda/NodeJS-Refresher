const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const pdf = require('html-pdf');
const cron = require('node-cron');

const generatePDF = (html, callback) => {
  pdf.create(html).toBuffer((err, buffer) => {
    if (err) return callback(err);
    callback(null, buffer);
  });
};

const sendEmail = (pdf, callback) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'abhisheknanda080@gmail.com',
      pass: 'Nanda@Abhishek@080'
    }
  });

  const mailOptions = {
    from: 'abhisheknanda080@gmail.com',
    to: 'abhishek.nanda@zessta,com',
    subject: 'Daily Report',
    attachments: [{
      filename: 'report.pdf',
      content: pdf
    }]
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return callback(err);
    callback(null, info);
  });
};

cron.schedule('45 15 * * *', () => {
  const html = '<h1>Daily Report</h1><p>This is the daily report.</p>';

  generatePDF(html, (err, pdf) => {
    if (err) return console.error(err);
    sendEmail(pdf, (err, info) => {
      if (err) return console.error(err);
      console.log(`Email sent: ${info.messageId}`);
    });
  });
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});
