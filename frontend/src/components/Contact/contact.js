import "./styles.css";

import axios from "axios";

import React, { useState } from "react";

import { motion } from "framer-motion";
// Notification alert
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClipLoader } from "react-spinners"; // Loader

// React Icons

import { FaTelegramPlane, FaTwitter } from "react-icons/fa"; // Telegram Send  Button XTwitter
import {
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi"; //Github,Linkedin, Message

// Address Details
const addressDetails = [
  {
    icon: <FiMapPin className="location-icon" />,
    label: "Location",
    description: "Mettupalayam, Coimbatore",
    href: "https://www.google.com/maps?q=Mettupalayam,+Coimbatore",
  },
  {
    icon: <FiMail className="email-icon" />,
    label: "Email",
    description: "sudhakar7602m@gmail.com",
    href: "mailto:sudhakar7602m@gmail.com",
  },
  {
    icon: <FiPhone className="phone-icon" />,
    label: "Phone",
    description: "91-6379314595",
    href: "tel:+916379314595",
  },
];

// Let's connect Section
const socialLinks = [
  {
    icon: <FiGithub className="contact-link-icon icon-github" />,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-gray-900",
    description: "Check out my code",
  },
  {
    icon: <FiLinkedin className="contact-link-icon icon-linkedin" />,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-600",
    description: "Connect professionally",
  },
  {
    icon: <FaTwitter className="contact-link-icon icon-twitter" />,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-blue-400",
    description: "Follow my thoughts",
  },
  {
    icon: <FiMessageSquare className="contact-link-icon icon-discord" />,
    label: "Discord",
    href: "https://discord.com",
    color: "hover:text-indigo-600",
    description: "Chat with me",
  },
];

// User sending mail
const USER_API_URL = "http://localhost:5000/api/contact/user";

// Admin sending mail
const ADMIN_API_URL = "http://localhost:5000/api/contact/admin";
const ADMIN_HEADERS = { headers: { "x-user-role": "admin" } };

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  // Send Email for Contact Form
  const sendContactForm = async (event) => {
    event.preventDefault();
    setLoader(true); //Loader
    try {
      // Send mail to user
      await axios.post(USER_API_URL, contactFormData);
      // Send mail to admin
      await axios.post(ADMIN_API_URL, contactFormData, ADMIN_HEADERS);

      toast.success("Contact form submitted successfully!");
      setContactFormData({
        userName: "",
        userEmail: "",
        subject: "",
        message: "",
      });
      setLoader(false);
    } catch (error) {
      toast.error("Error submitting contact form");
      setLoader(false); //Loader
    }
  };

  return (
    <>
      <div className="contact-header">
        <h2 className="header-title">
          Get In <span>Touch</span>
        </h2>
        <p>Let's discuss your project and find the best solutions together.</p>
      </div>
      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT SIDE - Form */}
          <div className="contact-left">
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">
              I'd love to hear about your project. Fill out the form below and
              I'll get back to you within 24 hours.
            </p>
            <form className="contact-form" onSubmit={sendContactForm}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name*</label>
                  <input
                    name="userName"
                    value={contactFormData.userName}
                    type="text"
                    placeholder="John"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    name="userEmail"
                    value={contactFormData.userEmail}
                    type="email"
                    placeholder="email@gmail.com"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Subject*</label>
                  <input
                    name="subject"
                    value={contactFormData.subject}
                    type="text"
                    placeholder="Subject"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message*</label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {loader ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  <p className="submit-btn-text">
                    <span>
                      <FaTelegramPlane className="send-icon" />
                    </span>
                    Send Message
                  </p>
                )}
              </button>
            </form>
          </div>
          {/* RIGHT SIDE - Info */}
          <div className="contact-right">
            <p className="subtitle">KEEP CLOSE</p>
            <h2 className="right-title">Contact Information</h2>
            <p className="description">
              At GrandVista Restaurant, we blend fine flavors with warm
              hospitality in an inviting setting. Whether it’s a casual meal or
              a special celebration, every visit promises great taste, comfort,
              and memorable moments.
            </p>

            <div className="contact-info">
              {addressDetails.map((detail, index) => (
                <motion.a
                  key={detail.label}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="info-box"
                >
                  <div className="icon-card">{detail.icon}</div>
                  <div className="info-details">
                    <h4>{detail.label}</h4>
                    <p>{detail.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social media icons card */}
            <div className="lets-connect-section">
              <h2>Let's Connect</h2>
              <div className="lets-connect-card">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="contact-link-card"
                  >
                    {social.icon}
                    <div>
                      <p className="contact-link-label">{social.label}</p>
                      <p className="contact-link-description">
                        {social.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
