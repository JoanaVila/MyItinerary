const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require ("passport");
const commentsSchema = require("../models/commentsSchema");
const userSchema = require("../models/userSchema");

router.post(
    "/addComments/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        let user = await userSchema.findById({ _id: req.user.id })
    if (!user) {
        
        res.status(404).json({ error: "User does not exist" })
    }
    const comment = new commentsSchema({
        text: req.body.text,
        userName: user.name,
        profile_img: user.profile_pic,
        itineraryID: req.params.id,
        user: user._id
    })
    await comment.save()
    res.send(comment)
    
    })

router.get('/:id',
	(req, res) => {
  		let itineraryRequested = req.params.id;
  		commentsSchema.find({ itineraryID: itineraryRequested })
			.then(comments => {
                console.log(comments)
				res.send(comments)
			})
			.catch(err => console.log(err));
});

router.put("/updateComments/:id",
passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        let user = await userSchema.findById({ _id: req.user.id })
    if (!user) {
        
            res.status(404).json({ error: "User does not exist" })
        }
    let comment = await commentsSchema.findById({ _id: req.params.id })
    console.log(comment)
    if (comment.user.toString() !== req.user.id){
        res.status(401).json({ error: "User not authorised" })
    }

    if (!comment){
        res.status(404).json({ error: "Comment does not exist" })
    } else {
       comment.text = req.body.text 
    }
    await comment.save()   
    res.send(comment)
    })

router.delete ("/deleteComments/:id",
passport.authenticate("jwt", { session: false }),
async (req, res) => {
    let user = await userSchema.findById({ _id: req.user.id })
if (!user) {
    
        res.status(404).json({ error: "User does not exist" })
    }
    let comment = await commentsSchema.findById({ _id: req.params.id })
console.log(comment)
if (comment.user.toString() !== req.user.id){
    res.status(401).json({ error: "User not authorised" })
}

if (!comment){
    res.status(404).json({ error: "Comment does not exist" })
} else {
    await comment.remove()
}
  
res.json({message: "Comment removed"})
}
)



module.exports = router