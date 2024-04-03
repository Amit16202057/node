const { Attendance, User } = require('../models');

// Log attendance
exports.logAttendance = async (req, res) => {
  try {
    const { userId, status } = req.body;
    
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newAttendance = await Attendance.create({
      status,
    });

    await user.addAttendance(newAttendance);

    res.status(201).json(newAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get attendance log for a user
exports.getUserAttendance = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      include: [{ model: Attendance }],
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user.Attendances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
