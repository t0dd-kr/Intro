const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */

router.post('/', function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) { return res.json( { status:false, message: info.message }) }
    req.login(user, function(err) {
      if(err) { return next(err); }
      return res.json({status:true, nickname: user.nickname});
    })
  })(req, res, next);
});

router.get('/', function(req, res){
  res.json(req.user);
});

module.exports = router;
