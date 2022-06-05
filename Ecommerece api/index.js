const express= require("express");
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const userRoute=require("./routes/user")
const authRoute=require("./routes/Auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
const stripeRoute=require("./routes/stripe")
const port = 5000
dotenv.config();

app.use(express.json())

// now we will connet data  base 
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB connection is sucessful'))
.catch((err)=>{
    console.log(err);
})
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/stripe", stripeRoute);


app.listen(port, () => {
    console.log(`i notebook backend listening on http://localhost:${port}`)
  })


