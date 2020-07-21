const mongoose = require("mongoose");

const itinerary = new mongoose.Schema({
    cityID: {
        type: String,
        required: true,
       
    },
    title: {
        type: String,
        required: true,
    },
    profile_pic: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    hashtags: {
        type: String,
        required: true
    },
    activity1: {
        type: String,
        required: true

    },
    activity2: {
        type: String,
        required: true

    },
    

}, {
    timestamps: true
})

const Itineraries = mongoose.model("itinerary", itinerary)
module.exports = Itineraries