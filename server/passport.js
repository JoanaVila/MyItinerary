const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const userSchema = require("./models/userSchema");
const keys = require("./config/keys");
const passport = require ("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    user.findById(id).then((user) => {
      done(null, user);
    });
  });

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= keys.secretOrKey;

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
    userSchema.findById(jwt_payload.id)
    .then(user => {
    if (user) {
    return done(null, user);
    }
    return done(null, false);
    })
    .catch(err => console.log(err));
    })
    );



module.exports = passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/users/google/redirect"
    },
     function(accessToken, refreshToken, profile, email, done) {
        userSchema.findOne({ email: email.emails[0].value })
        .then(currentUser => {
            if (currentUser) {
              currentUser.save()
              .then(res => {
                  done(null, res)
              })  
            } else {
                console.log("user not register")
                user = new userSchema({
                    name: email.displayName,
                    userGoogle: true,
                    email: email.emails[0].value,
                    profile_pic: email.photos[0].value
                })
                user.save()
                .then(newUser => {
                    done(null,newUser)
                })
            }
        }); 
    } 
));

