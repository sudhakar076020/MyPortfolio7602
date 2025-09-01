const express = require("express");
const router = express.Router();
const transporter = require("../mailer/mailer");

const authMiddleware = require("../middleware/middleware");

// Send Email Admin  (admin side)
router.post("/admin", authMiddleware, async (req, res) => {
  const { userName, userEmail, subject, message } = req.body;

  // Email validation
  if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address. Please provide a valid email.",
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail, // sending back to the user who filled contact form
    subject: "We’ve Received Your Message - GrandVista",
    html: `
    <h2>Thank You for Contacting GrandVista</h2>
    <p>Dear ${userName},</p>
    <p>We’ve received your message and our team will get back to you shortly.</p>
    
    <h3>Your Submitted Details</h3>
    <ul>
      <li><strong>Name:</strong> ${userName}</li>
      <li><strong>Email:</strong> ${userEmail}</li>
      <li><strong>Subject:</strong> ${subject}</li>
      <li><strong>Comments:</strong> ${message}</li>
    </ul>

    <p>Our customer care team will review your request and respond as soon as possible.  
    If your inquiry is urgent, please don’t hesitate to reach us directly through the details below.</p>

    <p>Warm regards,</p>
    <p><strong>The GrandVista Team</strong></p>

    <hr />
    <p><strong>Contact Us:</strong></p>
    <p>
      📍 GrandVista Fine Dining, MG Road, Bengaluru, India <br />
      📞 +91 98765 43210 <br />
      ✉️ support@grandvista.com
    </p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Mail sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error sending mail", error });
  }
});

// Send Email user feedback (user side)
router.post("/client", async (req, res) => {
  const { userName, userEmail, subject, message } = req.body;

  // Email validation
  if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address. Please provide a valid email.",
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, // must be your Gmail
    replyTo: userEmail, // user’s email (so you can reply)
    to: process.env.EMAIL_USER, // receiving email
    subject: `New Contact Form Submission - ${subject}`,
    html: `
    <h2>New Contact Form Submission</h2>
    <ul>
      <li><strong>Name:</strong> ${userName}</li>
      <li><strong>Email:</strong> ${userEmail}</li>
      <li><strong>Subject:</strong> ${subject}</li>
      <li><strong>Comments:</strong> ${message}</li>
    </ul>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Mail sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error sending mail", error });
  }
});

module.exports = router;
