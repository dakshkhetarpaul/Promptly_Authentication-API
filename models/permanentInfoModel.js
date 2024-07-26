const db = require('../db');

exports.moveTempInfoToPermanent = (user_id) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO PermanentInfo (user_id, firstName, lastName, telephone, mobile, contact_address1, 
      contact_address2, contact_city, contact_state, contact_postalCode, companyName, workingTrades)
      SELECT user_id, firstName, lastName, telephone, mobile, contact_address1, contact_address2, 
      contact_city, contact_state, contact_postalCode, companyName, workingTrades
      FROM TemporaryInfo WHERE user_id = ?`;

    db.query(query, [user_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
