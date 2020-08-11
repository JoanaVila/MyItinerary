const express = require("express");
const router = express.Router();
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const key = require("../config/keys");
const jwt = require("jsonwebtoken");
const passport = require ("passport");
const itinerarySchema = require("../models/itinerarySchema");

router.post("/register", async (req,res) => {
    console.log(req.body)
    const {
        name,
        password,
        email,
        profile_pic
    } = req.body

    
    try {
        user = new userSchema({
            name,
            userGoogle: false,
            password,
            email,
            profile_pic
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()
        res.send(user)

        
    } catch (error) {
        res.status(500).send(error.message)
        process.exit(1)
    }
})

router.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body
    try {
        let loginUser = await userSchema.findOne({email: req.body.email})
        if (!loginUser) {
            res.status(400).json({errors: "Email does not exist"})
            process.exit(1)
        }
        let passwordMatch = await bcrypt.compare(password, loginUser.password);
        console.log(req.body)
        if (!passwordMatch) {
            res.status(400).json({errors: "Invalid credentials"})
        }
        const payload = {
            id: loginUser.id,
            email: loginUser.email
        };
        console.log(payload)
        const options = {expiresIn: 2592000};
        jwt.sign(
            payload,
            key.secretOrKey,
            options,
            (err, token) => {
                if(err){
                    res.json({
                        success: false,
                        token: "There was an error"
                    });
                }else {
                    res.json({
                        success: true,
                        token: token
                    });
                }
            }
        );
    } catch (error) {
        res.status(500).send(error.message)
        process.exit(1)
    }
})

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    userSchema
    .findOne({ _id: req.user.id })
    .then(user => {
    res.json(user);
    })
    .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
   );

//Router Login with Google
router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  }));

// Router Callback
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }),
 (req, res) => {
     console.log(req.user)
     const payload = {
         id: req.user.id,
         name: req.user.name,
         picture: req.user.profile_pic,
     }
     const options = {expiresIn: 2592000};
            jwt.sign(
                payload,
                key.secretOrKey,
                options,
            (err, token) => {
                const myToken = "?code =" + token
                res.redirect('http://localhost:3000/cities' + myToken)
                }
            );


});

router.get(
    "/favourites",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    userSchema
    .findOne({ _id: req.user.id })
    .then(user => {
    res.json(user.favourites);
    })
    .catch(err => res.status(404).json({ error: "User does not exist" }));
    }
);
router.post(
    "/addFavourites/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
    let user = await userSchema.findById({ _id: req.user.id })
    if (!user) {
        console.log(user)
        res.status(404).json({ error: "User does not exist" })
    } 
    await itinerarySchema.findOne({ _id: req.params.id })
    .then(itinerary => {
     console.log(itinerary)
        if (!itinerary) {
            res.status(404).json({ error: "Itinerary not found" })
        } 
        let result = user.favourites.filter(itn => itn.itineraryID === itinerary._id)
        console.log(result)
        if (result.length !== 0) {
            res.status(404).json({error: "Itinerary already added"})
        } else {
            user.favourites.push({
                itineraryID: itinerary._id,
                title: itinerary.title,
                city_id: itinerary.city_id
            })
            user.save()
            res.send(user.favourites)
        }
    })
    } 
);
router.post(
    "/removeFavourites/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
    let user = await userSchema.findById({ _id: req.user.id })
        console.log(req.user)
        if (!user) {
            res.status(404).json({ error: "User does not exist" })
        }
    let result = user.favourites.map(itn => itn.itineraryID ).indexOf(req.params.id)
        console.log(result)
        if (result === -1) {
            res.status(404).json({ error: "Itinerary is not on favourites" })
        }
        user.favourites.splice(result, 1)
        user.save()
        res.send(user.favourites)
    }
)

module.exports = router;
   