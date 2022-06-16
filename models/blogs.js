const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:String,
    desc:String,
    imageUrl:String,
    company:String,
    rating:Number,
    loc:String,
    url:String,
    price:String
});


const blogModel = mongoose.model("blogModel",blogSchema);

module.exports = blogModel