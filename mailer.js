const sendEmail = (pdf, callback) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'user@example.com',
        pass: 'password'
      }
    });
  
    const mailOptions = {
      from: 'user@example.com',
      to: 'recipient@example.com',
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
  



  cron.schedule('0 0 * * *', () => {
  const html = '<h1>Daily Report</h1><p>This is the daily report.</p>';

  generatePDF(html, (err, pdf) => {
    if (err) return console.error(err);
    sendEmail(pdf, (err, info) => {
      if (err) return console.error(err);
      console.log(`Email sent: ${info.messageId}`);
    });
  });
});
