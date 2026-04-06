import { useLocation, useNavigate } from "react-router-dom";

function Payment(){

const location = useLocation();
const navigate = useNavigate();

const product = location.state?.product;

if(!product){
return <h2>No Product Selected</h2>
}

const handlePayment = async () => {

try{

// Check Razorpay Loaded

if(!window.Razorpay){
alert("Razorpay SDK not loaded");
return;
}

// Create Order

const res = await fetch("http://localhost:5000/create-order",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
amount: product.price
})
});

const data = await res.json();

if(!data.id){
alert("Order creation failed");
return;
}

// Razorpay Options

const options = {

key: "rzp_test_SaIJ2OqCMWdSCB", // replace with your key

amount: data.amount,

currency: "INR",

name: "SustainWear",

description: product.name,

order_id: data.id,

handler: async function (response){

alert("Payment Successful 🌱");

const user = JSON.parse(localStorage.getItem("user"));

// Save Order

await fetch("http://localhost:5000/save-order",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({

userId: user.id,
productName: product.name,
price: product.price,
paymentId: response.razorpay_payment_id

})
});

// Redirect

navigate("/my-products");

},

prefill:{
name:"Customer",
email:"customer@email.com",
contact:"9999999999"
},

theme:{
color:"#20c997"
}

};

// Open Razorpay

const paymentObject = new window.Razorpay(options);
paymentObject.open();

}catch(error){

console.log("Payment Error:",error);
alert("Payment Failed");

}

};

return(

<div className="payment-container">

<h2>Payment Page</h2>

<div className="payment-card">

<h3>{product.name}</h3>

<p>Price: ₹{product.price}</p>

<button 
className="pay-btn"
onClick={handlePayment}
>
Pay with Razorpay
</button>

</div>

</div>

);

}

export default Payment;