const db = require('../db');

exports.createUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Users (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

exports.updateUserStatus = (user_id, status) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Users SET status = ? WHERE user_id = ?';
    db.query(query, [status, user_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
