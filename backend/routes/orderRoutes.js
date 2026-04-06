const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// Save Order

router.post("/save-order", async (req,res)=>{

try{

const order = new Order(req.body);

await order.save();

res.json({
message:"Order Saved Successfully"
});

}catch(error){
res.status(500).json(error);
}

});


// Get Orders

router.get("/my-orders/:userId", async (req,res)=>{

try{

const orders = await Order.find({
userId: req.params.userId
});

res.json(orders);

}catch(error){
res.status(500).json(error);
}

});

module.exports = router;