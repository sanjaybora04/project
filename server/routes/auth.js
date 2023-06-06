const router = require("express").Router();
const passport = require('passport');
const authCheck = require('../middleware/auth-check')

router.get('/login',(req,res)=>{
    res.send("login page");
})

router.get('/logout',(req,res)=>{
    req.logout();
    // res.redirect('/auth/google')
})

router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.redirect('/auth/profile')
})

router.get('/profile',authCheck,(req,res)=>{
    res.send(req.user);
})

module.exports = router;