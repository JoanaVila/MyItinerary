const express = require("express");
const connectDb = require("./config/db");
const cors = require ("cors");
const bodyParser = require("body-parser");
//passport configuration
const passport = require("passport");


const app = express()


connectDb()
//passport middleware
app.use(passport.initialize())
require ("./passport")
app.use(express.json({extended: false}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req, res) => res.send("API running"))
app.use("/cities", require("./routes/cities"))
app.use("/itineraries", require("./routes/itineraries"))
app.use("/activities", require("./routes/activities"))
app.use("/users", require("./routes/user"))
app.use("/comments", require("./routes/comments"))





const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started at port ${PORT}`))