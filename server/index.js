const express = require('express');
const auth = require('./routes/auth');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

//connect to mongodb
const connectToMongo = require('./db/db');
connectToMongo();

app.use(cookieSession({
    //set age of cookie to 24 days
    maxAge: 24*24*60*60*1000,
    keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',auth)

app.listen(5000,()=>{
    console.log("server started at Port : 5000");
})