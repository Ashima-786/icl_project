const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
key_id: "rzp_test_SaIJ2OqCMWdSCB",
key_secret: "XZveMFgDcfWkhuJXhokdrSf5"
});

router.post("/create-order", async (req,res)=>{

try{

const options = {
amount: req.body.amount * 100,
currency: "INR",
receipt: "receipt_order"
};

const order = await razorpay.orders.create(options);

res.json(order);

}catch(error){

console.log(error);
res.status(500).json({
message:"Order creation failed"
});

}

});

module.exports = router;