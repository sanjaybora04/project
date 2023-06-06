const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../db/models/usermodel');

passport.serializeUser((user,done)=>{
    done(null,user._id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    //check if user already exists in our database
    User.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser){
            //already have the user
            console.log("user is : ",currentUser);
            done(null,currentUser);
        }
        else{
            //create new user
            new User({
                name: profile.displayName,
                googleId: profile.id
            }).save().then((newUser)=>{
                console.log('new user created : ' + newUser);
                done(null,newUser);
            });
        }
    })
})
)