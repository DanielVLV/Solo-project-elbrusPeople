function isAdmin(req, res, next) {
  if (req.session?.user?.status === 'admin') {
    return next();
  }
  res.redirect('/');
}

module.exports = isAdmin;
