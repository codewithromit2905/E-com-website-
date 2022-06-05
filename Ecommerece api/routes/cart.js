const router=require("express").Router();
const Cart = require("../models/Cart");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifytoken");
  
//  creating a cart 
router.post("/", verifyToken ,async(req,res)=>{
    const newcart=new Cart(req.body)
    try {
        const savedcart=await newproduct.save()
        res.status(200).json(savedcart)
        
    } catch (error) {
        res.status(401).send({Error:"please  autoken"})
      
    }
    
})
// updating a  cart 

  router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    
  
    try {
      const updatecart= await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatecart);
    } catch (err) {
        res.status(500).json(error)
    }
  });


//  to delete cart 
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) =>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart has been deleted ")
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})


// to fetch user a cart 
router.get("/find/:userid",  async (req, res) =>{
    try {
        const cart= await Cart.findById(req.params.id);
   
    res.status(200).json(cart);
      
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})
// to fetchall all the cart 

router.get("/", async (req, res) => {

    try {
        const carts=await Cart.find();
        res.status(200).json(carts);

        
    } catch (error) {
        res.status(500).json(error)
        
    }
  
  });



module.exports=router
