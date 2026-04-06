import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(res.ok){

      // Save user (Professional feature)
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful 🌱");

      navigate("/home");   // ✅ Updated

    } else {
      alert(data.message);
    }

  } catch(error){
    console.log(error);
    alert("Login Failed");
  }
};

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>🌱 SustainWear</h2>
        <p className="login-subtitle">
          Sustainable Fashion Marketplace
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="forgot">
            <span>Forgot Password?</span>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        {/* Move outside form */}
        <p style={{marginTop:"15px"}}>
          Don't have account? 
          <span 
            style={{cursor:"pointer",color:"#fff"}}
            onClick={()=>navigate("/signup")}
          >
            {" "}Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;