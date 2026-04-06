import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar(){

const navigate = useNavigate();
const [user, setUser] = useState(null);
const [dropdown, setDropdown] = useState(false);

useEffect(()=>{
const storedUser = localStorage.getItem("user");
if(storedUser){
setUser(JSON.parse(storedUser));
}
},[]);

const handleLogout = () =>{
localStorage.removeItem("user");
navigate("/login");
window.location.reload();
}

return(

<nav className="navbar">

<h2 
className="logo"
onClick={()=>navigate("/home")}
>
🌱 SustainWear
</h2>

<div className="nav-links">

<Link to="/home">Home</Link>

<Link to="/marketplace">Marketplace</Link>

<Link 
to="/add-product" 
className="sell-btn"
>
Sell
</Link>

<Link to="/brands">Brands</Link>

{user ? (

<div 
className="user-menu"
onClick={()=>setDropdown(!dropdown)}
>

<div className="user-avatar">
{user.name.charAt(0).toUpperCase()}
</div>

<span className="username">
{user.name}
</span>

{dropdown && (

<div className="dropdown">

<div onClick={()=>navigate("/profile")}>
👤 Profile
</div>

<div onClick={()=>navigate("/my-products")}>
📦 My Listings
</div>

<div onClick={handleLogout}>
🚪 Logout
</div>

</div>

)}

</div>

) : (

<button 
className="login-btn"
onClick={()=>navigate("/login")}
>
Login
</button>

)}

</div>

</nav>

)

}

export default Navbar;