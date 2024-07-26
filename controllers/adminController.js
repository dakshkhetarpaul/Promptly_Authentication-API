const userModel = require('../models/userModel');
const tempInfoModel = require('../models/tempInfoModel');
const permanentInfoModel = require('../models/permanentInfoModel');
const emailService = require('../services/emailService');

exports.approveUser = async (req, res) => {
  const { user_id } = req.body;

  try {
    await userModel.updateUserStatus(user_id, 'approved');
    await permanentInfoModel.moveTempInfoToPermanent(user_id);
    await tempInfoModel.deleteTempInfo(user_id);
    await emailService.sendEmail(user_id, 'Your account has been approved.');

    res.status(200).json({ message: 'User approved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving user', error });
  }
};

exports.rejectUser = async (req, res) => {
  const { user_id } = req.body;

  try {
    await userModel.updateUserStatus(user_id, 'rejected');
    await emailService.sendEmail(user_id, 'Your account has been rejected.');

    res.status(200).json({ message: 'User rejected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting user', error });
  }
};

exports.holdUser = async (req, res) => {
  const { user_id, comments } = req.body;

  try {
    await userModel.updateUserStatus(user_id, 'hold');
    await tempInfoModel.updateTempInfoComments(user_id, comments);
    await emailService.sendEmail(user_id, `Your account is on hold. Comments: ${comments}`);

    res.status(200).json({ message: 'User put on hold successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error putting user on hold', error });
  }
};
