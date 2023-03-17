const router = require('express').Router();
const bcrypt = require('bcrypt');

const Registration = require('../views/Registration');

const renderTemplate = require('../renderTemplate');

const { User, StatusAccaunt } = require('../../db/models');

router.get('/registration', async (req, res) => {
  renderTemplate(Registration, null, res);
});

router.post('/registration', async (req, res) => {
  const {
    firstName, lastName, country, email, avatar, password,
  } = req.body;
  const checkEmail = await User.findOne({ where: { email } });
  if (!checkEmail) {
    const hash = await bcrypt.hash(password, 10);
    if (firstName && lastName && email && country && password) {
      const newUser = await User.create({
        firstName, lastName, email, country, avatar, password: hash,
      });
      await StatusAccaunt.create({
        userId: newUser.dataValues.id, status: 'user',
      });
      res.json('Registration completed successfully');
    } else {
      res.json('Fill in all fields');
    }
  }
  if (checkEmail) {
    const message = 'User already registered';
    res.json(message);
  }
});

module.exports = router;
