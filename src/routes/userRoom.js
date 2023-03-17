const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const UserRoom = require('../views/UserRoom');
const { User } = require('../../db/models');
const isUser = require('../middleware/profile');

router.get('/profile', isUser, async (req, res) => {
  const { user } = req.session;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user?.country}&appid=c3fbb2aaf544bea7317e107f22d2b2c3&units=metric`);
    const json = await response.json();
    user.sity = `sity ${json?.name}`;
    // 'in istanbul now 5:00 hours'
    // air temperature in istanbul 5
    // user.temp = `temp ${Math.round(json?.main?.temp_max)} °C`;
    user.icon = json?.weather[0]?.icon;

    const now = new Date();
    const offset = json.timezone * 1000;
    const localTime = new Date(now.getTime() + offset);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'UTC',
    };

    const timeString = localTime.toLocaleTimeString('en-US', options);
    user.time = `in ${user?.country} now ${timeString} hours and temp ${Math.round(json?.main?.temp_max)} °C`;

    renderTemplate(UserRoom, { user }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/profile', isUser, async (req, res) => {
  const {
    id, firstName, lastName, avatar, country,
  } = req.body;
  console.log(id, firstName, lastName, avatar, country);
  if (!firstName || !lastName || !country) {
    res.json('Fill in all fields FREAK');
  } else {
    await User.update({
      firstName, lastName, avatar, country,
    }, { where: { id }, returning: true, plain: true });
    if (avatar) {
      req.session.user = {
        firstName, lastName, avatar, country,
      };
    } else {
      req.session.user = { firstName, lastName, country };
    }
    res.json('Changes saved');
  }
});

module.exports = router;
