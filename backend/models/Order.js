const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

userId:{
type:String,
required:true
},

productName:{
type:String,
required:true
},

price:{
type:Number,
required:true
},

paymentId:{
type:String,
required:true
},

date:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Order", orderSchema);