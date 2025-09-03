const express = require("express");
const router = express.Router();
const transporter = require("../mailer/mailer");

// =======================
//  POST /client
//  User → Admin
// =======================
router.post("/client", async (req, res) => {
  try {
    const { userName, userEmail, subject, message } = req.body;

    if (!userName || !userEmail || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
      from: `"${userName}" <${userEmail}>`,
      to: process.env.EMAIL_USER, // send to admin email
      subject: `📩 New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${userName}</p>
        <p><b>Email:</b> ${userEmail}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent to admin ✅" });
  } catch (error) {
    console.error("❌ Client → Admin Mail Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// =======================
//  POST /admin
//  Admin → User (auto-reply)
// =======================
router.post("/admin", async (req, res) => {
  try {
    const { userName, userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ error: "User email is required" });
    }

    const mailOptions = {
      from: `"Sudhakar Portfolio" <${process.env.EMAIL_USER}>`,
      to: userEmail, // send back to user
      subject: "📬 Thank you for contacting me",
      html: `
        <h2>Hi ${userName || "there"},</h2>
        <p>Thanks for reaching out to me via my portfolio site.</p>
        <p>I’ve received your message and will get back to you as soon as possible.</p>
        <br/>
        <p>Best regards,<br/>Sudhakar</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Auto-reply sent to user ✅" });
  } catch (error) {
    console.error("Email error:", error); 
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
