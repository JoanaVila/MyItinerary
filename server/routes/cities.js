const express = require("express");
const router = express.Router();
const citiesSchema = require("../models/citiesSchema");

router.get("/all", async (req, res) => {
    try {
        const cities = await citiesSchema.find()
        res.send(cities)
        
    } catch (err) {
        res.status(500).send(err.message)
        
    }

})

router.post(
    "/add",
    async (req, res) => {
        console.log(req.body)
        const {
            name,
            country,
            img,
        } = req.body;
        try {
            console.log(req.body)
            city = new citiesSchema({
                name,
                country,
                img
            });
        await city.save()
        return res.json(city)
        } catch (err) {
            console.error(err.message);
            res.status(500).send(err.message);
        }
    }
);

router.get('/:id',
	(req, res) => {
        
  		let cityRequested = req.params.id;
  		citiesSchema.findById({_id: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});



module.exports = router