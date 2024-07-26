const db = require('../db');

exports.createTempInfo = (user_id, userInfo) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO TemporaryInfo 
      (user_id, firstName, lastName, telephone, mobile, contact_address1, contact_address2, 
      contact_city, contact_state, contact_postalCode, companyName, workingTrades) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const values = [
      user_id, userInfo.firstName, userInfo.lastName, userInfo.telephone, userInfo.mobile,
      userInfo.contact_address1, userInfo.contact_address2, userInfo.contact_city,
      userInfo.contact_state, userInfo.contact_postalCode, userInfo.companyName, 
      JSON.stringify(userInfo.workingTrades)
    ];

    db.query(query, values, (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

exports.deleteTempInfo = (user_id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM TemporaryInfo WHERE user_id = ?';
    db.query(query, [user_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

exports.updateTempInfoComments = (user_id, comments) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE TemporaryInfo SET comments = ? WHERE user_id = ?';
    db.query(query, [comments, user_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
