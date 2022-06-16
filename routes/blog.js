const router = require("express").Router();
const blogModel = require("../models/blogs.js");

router.get("/",(req,res) => {
    res.send("Bu yerda faqat bloglar bor")
})

// get all metod
router.get("/all",async(req,res) => {
    const blogPost = await blogModel.find();
    try {
        res.status(200).json(blogPost)
    } catch (error) {
        res.status(404).json(error.messsage)
    }   
})

// create metod
router.post("/",async(req,res) => {
    const newBlog = new blogModel(req.body);
    try {
        await newBlog.save();
        res.status(200).json(newBlog)
    } catch (error) {
        res.status(200).json(error)
    }
})

// update method
router.put("/:id",async (req,res) => {
    const blog = await blogModel.findById(req.params.id);
    !blog && res.status(404).json(`No post that id ${req.params.id}`)
    try {
        const updatePost = await blogModel.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(505).json(error)
    }
})

// delete route
router.delete("/:id",async(req,res) => {
    const blog = await blogModel.findById(req.params.id);

    !blog && res.status(404).json(`No blog this id ${req.params.id}`)

    try {
        res.status(200).json(`Your post is deleted succesfully`)
    } catch (error) {
        res.status(500).json(`Something wrong ${error.messsage}`)
    }
})

module.exports = router;