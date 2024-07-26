const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/approve', adminController.approveUser);
router.post('/reject', adminController.rejectUser);
router.post('/hold', adminController.holdUser);

module.exports = router;
