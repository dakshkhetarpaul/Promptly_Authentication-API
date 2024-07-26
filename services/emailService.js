const nodemailer = require('nodemailer');
const db = require('../db'); // Import the database connection
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendEmail = (user_id, message) => {
  return new Promise((resolve, reject) => {
    // Fetch user email from the database
    db.query('SELECT email FROM Users WHERE user_id = ?', [user_id], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length === 0) {
        return reject(new Error('User not found'));
      }
      const userEmail = results[0].email;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail, // Use fetched email
        subject: 'Account Status Update',
        text: message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info.response);
      });
    });
  });
};

