import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Splash(){

const navigate = useNavigate();

return(

<div className="splash-container">

<div className="splash-overlay"></div>

<div className="splash-content">

<h1 className="splash-title">
🌱 SustainWear
</h1>

<p className="splash-tagline">
Sustainable Fashion Marketplace <br/>
Buy • Sell • Reduce Fashion Waste
</p>

<div className="splash-buttons">

<button 
className="primary-btn"
onClick={()=>navigate("/login")}
>
Login
</button>

<button 
className="secondary-btn"
onClick={()=>navigate("/signup")}
>
Get Started
</button>

</div>

<div className="splash-features">

<div className="feature">
🌿 Eco Friendly
</div>

<div className="feature">
♻️ Reduce Waste
</div>

<div className="feature">
📊 Sustainability Score
</div>

</div>

</div>

</div>

);

}

export default Splash;