const router = require('express').Router();
const renderTemplate = require('../renderTemplate');
const Home = require('../views/Home');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  try {
    const allUsers = await User.findAll({ raw: true });

    const promises = allUsers.map(async (el) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${el?.country}&appid=c3fbb2aaf544bea7317e107f22d2b2c3&units=metric`);
      const json = await response.json();
      const obj = { ...el };
      obj.country = `sity ${json?.name}`;
      obj.temp = `temp ${Math.round(json?.main?.temp_max)} °C`;
      obj.icon = json?.weather[0]?.icon;

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
      obj.time = `time ${timeString}`;
      return obj;
    });

    const newAllUsers = await Promise.all(promises);
    renderTemplate(Home, { user, newAllUsers }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
