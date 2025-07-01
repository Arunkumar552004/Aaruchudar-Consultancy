const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // replace with DB in production

// 📩 Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com", // 👉 your Gmail
    pass: "your_app_password", // ⚠️ Use App Password, not Gmail password
  },
});

// ✨ Send email
function sendSignupEmail(user) {
  const mailOptions = {
    from: "your_email@gmail.com",
    to: "your_email@gmail.com", // receive yourself
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

  users.push(user); // store in memory
  sendSignupEmail(user); // 🎯 send email on signup
  res.status(200).json({ message: "Signup successful", user });
});

// 🚀 Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
