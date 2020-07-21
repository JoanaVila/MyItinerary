mongoose = require ("mongoose")

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userGoogle: {
        type: Boolean,
        
    },
    password: {
        type: String,

        required: function validate(){
            if (this.userGoogle) {
                return false
            } else {
                return true 
            }
        }
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile_pic: {
        type:String,
    },

    favourites: {
        type:Array,
    },
    

})

module.exports = User = mongoose.model("user",userSchema)