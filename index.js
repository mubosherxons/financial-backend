const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blog.js")


dotenv.config()
const app = express();

app.use("/api/blog",blogRoute)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(5000,() => console.log(`Server is running on 5000 port and mongoose succesfully connection`))
}).catch((err) => {
    console.log(`Not connection please try again ${err.message}`)
})