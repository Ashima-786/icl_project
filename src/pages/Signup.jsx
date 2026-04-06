import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = async (e) => {
  e.preventDefault();

  try {

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    if(res.ok){
      alert("Signup Successful 🌱");
      navigate("/login");
    }else{
      alert(data.message || "Signup failed");
    }

  } catch(error){
    console.log(error);
    alert("Signup Failed");
  }
};
return (

<div className="login-container">

<div className="login-card">

<h2>🌱 Join SustainWear</h2>

<form onSubmit={handleSignup}>

<div className="input-group">
<input
type="text"
required
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<label>Name</label>
</div>

<div className="input-group">
<input
type="email"
required
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label>Email</label>
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

<button type="submit" className="login-btn">
Signup
</button>

</form>

</div>

</div>

);

}

export default Signup;