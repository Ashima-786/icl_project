import { useEffect, useState } from "react";

function MyListings(){

const [orders, setOrders] = useState([]);

useEffect(()=>{

const user = JSON.parse(localStorage.getItem("user"));

fetch(`http://localhost:5000/my-orders/${user.id}`)
.then(res=>res.json())
.then(data=>setOrders(data));

},[])

return(

<div className="my-listings">

<h2>My Orders</h2>

{orders.map((order,index)=>(
<div 
key={index}
className="order-card"
>

<h3>{order.productName}</h3>

<p>₹{order.price}</p>

<p>Payment Successful</p>

</div>
))}

</div>

)

}

export default MyListings;