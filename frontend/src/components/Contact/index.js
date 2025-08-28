import { useState } from "react";
import emailjs from "emailjs-com";
import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kbap74w",
        "template_tt9hy8d",
        formData,
        "jvZiVt_Q9NvDgcem_"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="title-card">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-description">I'd love to hear from you!</p>
        </div>
      </div>
      <div className="contact-card">
        <h1 className="contact-heading">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="form-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
