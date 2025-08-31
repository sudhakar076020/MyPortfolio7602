import "./styles.css"; // Import normal CSS
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = [
  { id: "HOME", title: "Home", path: "/" },
  { id: "ABOUT", title: "About", path: "/about" },
  { id: "PROJECTS", title: "Projects", path: "/projects" },
  { id: "EDUCATION", title: "Education", path: "/education" },
  { id: "CONTACT", title: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-about">
            <h2>
              <span className="logo-box">S</span> Sudhakar
            </h2>
            <p>
              Full Stack Developer passionate about creating exceptional digital
              experiences through innovative web and mobile applications.
            </p>
          </div>
          {/* Navigation Section */}
          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-links">
            <h3>Contact with me</h3>
            <ul>
              <li>
                <h4>Email</h4>
                <p>sudhakar7602m@gmail.com</p>
              </li>
              <li>
                <h4>Location</h4>
                <p>Mettupalayam, Coimbatore</p>
              </li>
              {/* This section css was in the contact component */}
              <div className="footer-social-icons-card ">
                <a href="#">
                  <FaFacebookF className="social-icons" />
                </a>
                <a href="#">
                  <FaInstagram className="social-icons" />
                </a>
                <a href="#">
                  <FaTwitter className="social-icons" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="social-icons" />
                </a>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © 2025 GrandVista by{" "}
            <span className="developer-name">
              <span className="footer-name">Sudhakar</span>
            </span>
          </p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
