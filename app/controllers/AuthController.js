const authLayout = { layout: 'layout/auth' };

function showLogin(req, res) {
  res.render('auth/login', authLayout);
}

function showRegister(req, res) {
  res.sendFile('auth/register', authLayout);
}

module.exports = { showLogin, showRegister };