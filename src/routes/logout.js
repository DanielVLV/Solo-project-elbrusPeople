const router = require('express').Router();

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.clearCookie('Cookie');
      res.redirect('/');
    });
  }
});

module.exports = router;
