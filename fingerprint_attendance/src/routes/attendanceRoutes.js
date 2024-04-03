const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const attendanceController = require('../controllers/attendanceController');

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.post('/attendance', attendanceController.logAttendance);

module.exports = router;
