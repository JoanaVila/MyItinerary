const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    profile_img: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    itineraryID: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
        
})

module.exports = Comments = mongoose.model("comment", commentsSchema)