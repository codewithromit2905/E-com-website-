const router=require("express").Router();
const bcrypt=require('bcryptjs')
const User = require("../models/User");

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifytoken");
  
// update username 
  router.put("/:id", verifyTokenAndAuthorization,async (req, res) => {
   
    const salt = bcrypt.genSaltSync(10)
    
    const   secPass=await bcrypt.hash(req.body.password,salt)
    if (req.body.password) {
        req.body.password=secPass
     
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      let success=true
      res.status(200).json({success,updatedUser});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some eroor occured"); 
    }
  });


//   let delete method 
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) =>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted ")
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})


// now we will write get meothod 
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
   
    res.status(200).json(user);
      
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})


// TO GET ALL USER 
router.get("/", verifyTokenAndAdmin, async (req, res) =>{
    try {
       const user= await User.find()
       res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})
// get user status 


router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports=router