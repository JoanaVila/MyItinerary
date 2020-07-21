const express = require("express");
const router = express.Router();
const activitiesSchema = require("../models/activitiesSchema");

router.get('/:id', (req, res) => {
    let itineraryRequested = req.params.id;
    activitiesSchema.find({ itinerary_id: itineraryRequested })
      .then(activities => {
          res.send(activities)
      })
      .catch(err => console.log(err));
});
router.post("/:id", async (req, res) => {
    const {
        itinerary_id,
        name,
        img,
    } = req.body
    try {
        activity = new activitiesSchema ({
        name,
        img,
        itinerary_id: req.params.id
        })
        await activity.save()
        res.send(activity)
    } catch (err) {
        res.status(500).send(err.message)
    }
})
module.exports = router