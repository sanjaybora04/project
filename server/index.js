const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')

const auth = require('./routes/auth');
const business = require('./routes/business')

const app = express();

//connect to mongodb
const connectToMongo = require('./db/db');
connectToMongo();

app.use(cors())
app.use(express.json())
app.use(cookieSession({
    //set age of cookie to 24 days
    maxAge: 24*24*60*60*1000,
    keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',auth)
app.use('/',business)

app.listen(5000,()=>{
    console.log("server started at Port : 5000");
})