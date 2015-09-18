var UserProxy  = require('../proxy').User;

exports.loginRequired = function(req, res, next){
    if (!req.session || !req.session.user) {
      return res.status(403).send('User need login!');
    }
    next();
};