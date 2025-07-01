const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // In-memory storage (temporary)

// 📩 Email configuration using .env
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // From .env
    pass: process.env.EMAIL_PASS, // From .env
  },
});

// ✨ Send email function
function sendSignupEmail(user) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to self
    subject: `🆕 New Signup: ${user.username}`,
    text: `A new user signed up:\n\nUsername: ${user.username}\nEmail: ${user.email}\nRole: ${user.role}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
    } else {
      console.log("📬 Email sent:", info.response);
    }
  });
}

// 🔐 Signup route
app.post("/api/signup", (req, res) => {
  const user = req.body;

  const exists = users.some((u) => u.email === user.email);
  if (exists) {
    return res.status(409).json({ error: "User already exists" });
  }

  users.push(user);
  sendSignupEmail(user);
  res.status(200).json({ message: "Signup successful", user });
});

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
