const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../renderTemplate');
const Login = require('../views/Login');

const { User, StatusAccaunt } = require('../../db/models');

router.get('/login', async (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/login', async (req, res) => {
  const {
    email, password,
  } = req.body;
  const checkUser = await User.findOne({ where: { email }, raw: true });
  const id = checkUser?.id;
  const firstName = checkUser?.firstName;
  const lastName = checkUser?.lastName;
  const country = checkUser?.country;
  const avatar = checkUser?.avatar;

  if (checkUser) {
    const checkPass = await bcrypt.compare(password, checkUser.password);
    if (!checkPass) {
      const message = 'Incorrect password';
      res.json(message);
    }
    if (checkPass) {
      const status = await StatusAccaunt.findOne({ where: { userId: id }, raw: true });

      req.session.user = {
        id, firstName, lastName, country, email, status: status.status, avatar,
      };
      res.json('Welcome to the club buddy');
    }
  }
  if (!checkUser) {
    const message = 'User is not found';
    res.json(message);
  }
});

module.exports = router;
