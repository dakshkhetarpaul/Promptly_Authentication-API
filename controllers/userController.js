const userModel = require('../models/userModel');
const tempInfoModel = require('../models/tempInfoModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { email, password, cPassword, ...userInfo } = req.body;

  if (password !== cPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser(email, hashedPassword);
    await tempInfoModel.createTempInfo(userId, userInfo);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
