const router=require("express").Router();
const User=require("../models/User")
// const CryptoJS=require("crypto-js")
const bcrypt=require('bcryptjs')
const JWT=require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
// creating login
router.post("/register",[
    body('email' ,"please enter valid email").isEmail(),
    body('name' ,"enter minimum 3 charcter").isLength({min:5}),
   
], async(req,res)=>{
    
    const salt = bcrypt.genSaltSync(10)
    
    const   secPass=await bcrypt.hash(req.body.password,salt)
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,

        password: secPass
    })
    try {
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
    
        
    } catch (error) {
        res.status(500).json(error);
        
    }
});



router.get('/login', async(req,res)=>{  
    
const  {username,password}=req.body

try {
    let user=  await User.findOne({username:req.body.username})
    if(!user){
        return res.status(400).json({errors:"please try to login with correct credential "})
    }
    const passwordcompare= await bcrypt.compare(password,user.password)
    if (!passwordcompare){
        let  success=false
        return res.status(400).json({  success, errors:"please try to login with correct credential "})

    }
    
    const accessToken = JWT.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {expiresIn:"3d"}
      );
      res.status(200).json({user, accessToken});
  
      
    
            
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("some eroor occured"); 
}
})

module.exports=router