const mongoose=require("mongoose")




const productschema= new mongoose.Schema({
    title:{type:String, require:true, unique:true},
    desc:{type:String, require:true,},
    img:{type:String, require:true,},
    categories:{type:Array },
    color:{type:Array},
    size:{type:Array},
    price:{type:String, require:true,},
  
   
},
{timestamps:true})

module.exports=mongoose.model("Product",productschema)




