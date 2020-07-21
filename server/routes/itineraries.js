const express = require("express");
const router = express.Router();
const itinerarySchema = require("../models/itinerarySchema");


router.post(
    "/add/:id",
    async (req, res) => {
        console.log(req.body)
        const {
            cityID,
            title,
            profile_pic,
            rating,
            duration,
            price,
            hashtags
        } = req.body;
        try {
            console.log(req.body)
            itinerary = new itinerarySchema({
                title,
                profile_pic,
                rating,
                duration,
                price,
                hashtags,
                cityID: req.params.id
            });
        await itinerary.save()
        return res.json(itinerary)
        } catch (err) {
            console.error(err.message);
            res.status(500).send(err.message);
        }
    }
);

router.get("/all", async (req, res) => {
    try {
        const itineraries = await itinerarySchema.find()
        res.send(itineraries)
        
    } catch (err) {
        res.status(500).send(err.message)
        
    }

});

router.get('/:id',
	(req, res) => {
  		let itineraryRequested = req.params.id;
  		itinerarySchema.find({ cityID: itineraryRequested })
			.then(itinerary => {
				res.send(itinerary)
			})
			.catch(err => console.log(err));
});

module.exports = router