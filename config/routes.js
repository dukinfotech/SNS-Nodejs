const AuthController = require(rootPath + '/app/controllers/AuthController.js');

module.exports = function(app) {
  app.get('/login', AuthController.showLogin);
  app.get('/register', AuthController.showRegister);
}