const router = require('express').Router();
const renderTemplate = require('../renderTemplate');

const ErrorPage = require('../views/error');

router.get('/404', (req, res) => {
  renderTemplate(ErrorPage, {}, res);
});

module.exports = router;
