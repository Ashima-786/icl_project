const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


// =====================
// Signup Route
// =====================

router.post("/signup", async (req, res) => {

try {

const { name, email, password } = req.body;

// Check if user already exists
const existingUser = await User.findOne({ email });

if(existingUser){
return res.status(400).json({
message: "User already exists"
});
}

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Create user
const user = new User({
name,
email,
password: hashedPassword
});

await user.save();

res.status(201).json({
message: "Signup Successful 🌱",
user: {
id: user._id,
name: user.name,
email: user.email
}
});

} catch (error) {

res.status(500).json({
message: "Signup Failed",
error: error.message
});

}

});



// =====================
// Login Route
// =====================

router.post("/login", async (req, res) => {

try {

const { email, password } = req.body;

// Check user
const user = await User.findOne({ email });

if (!user) {
return res.status(400).json({
message: "User not found"
});
}

// Compare password
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
return res.status(400).json({
message: "Invalid password"
});
}

// Login success
res.status(200).json({
message: "Login Successful 🌱",
user: {
id: user._id,
name: user.name,
email: user.email
}
});

} catch (error) {

res.status(500).json({
message: "Login Failed",
error: error.message
});

}

});



module.exports = router;