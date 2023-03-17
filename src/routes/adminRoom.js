const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const AdminRoom = require('../views/AdminRoom');
const { User } = require('../../db/models');
const isAdmin = require('../middleware/admin');

router.get('/adminRoom', isAdmin, async (req, res) => {
  const { user } = req.session;
  try {
    const allUsers = await User.findAll({ raw: true });
    renderTemplate(AdminRoom, { user, allUsers }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/adminRoom', isAdmin, async (req, res) => {
  try {
    const { id } = req.body;
    await User.destroy({ where: { id }, raw: true });
    res.json('Freak successfully banned');
  } catch (error) {
    console.com(error);
  }
});

module.exports = router;
