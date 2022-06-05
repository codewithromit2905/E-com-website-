
const router=require("express").Router();
const bcrypt=require('bcryptjs');
const Product = require("../models/Product");
const product = require("../models/Product");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifytoken");
  
//  creating a product 
router.post("/", verifyTokenAndAdmin ,async(req,res)=>{
    const newproduct=new product(req.body)
    try {
        const savedproduct=await newproduct.save()
        res.status(200).json(savedproduct)
        
    } catch (error) {
        res.status(500).json(error)
      
    }
    
})
// updating a product 

  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    
  
    try {
      const updateproduct= await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateproduct);
    } catch (err) {
        res.status(500).json(error)
    }
  });


//  to delete product 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) =>{
    try {
        await product.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted ")
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})


// now we will write get meothod 
router.get("/find/:id",  async (req, res) =>{
    try {
        const product= await Product.findById(req.params.id);
   
    res.status(200).json(product);
      
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})
// to fetchall product

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports=router



module.exports=router