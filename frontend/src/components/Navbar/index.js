import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./index.css";

import { Link } from "react-router-dom";

// Popup
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { motion } from "framer-motion"; // Importing framer-motion for animations

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("HOME");

  const navLinks = [
    { id: "HOME", title: "Home", path: "/" },
    { id: "ABOUT", title: "About", path: "/about" },
    { id: "PROJECTS", title: "Projects", path: "/projects" },
    { id: "EDUCATION", title: "Education", path: "/education" },
    { id: "CONTACT", title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon"></span>{" "}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="name">
            Sudhakar
          </Link>
        </motion.p>
      </div>

      {/*Desktop Menu */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <Link to={link.path}>
            {" "}
            <li
              key={link.id}
              className={active === link.id ? "active" : ""}
              onClick={() => setActive(link.id)}
            >
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="nav-icons">
        <a href="https://github.com/sudhakar076020/" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/sudhakar-m7602" target="_blank">
          <FiLinkedin />
        </a>
        <a href="mailto:sudhakar7602m@gmail.com" target="_blank">
          <FiMail />
        </a>
      </div>
      {/* Small device menu */}
      <div className="popup-wrapper">
        <Popup
          trigger={(open) => (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="hamburger_close-button" type="button">
                {open ? (
                  <IoCloseOutline className="close-icon" />
                ) : (
                  <RxHamburgerMenu className="hamburger-icon" />
                )}
              </button>
            </motion.div>
          )}
          modal
          closeOnDocumentClick
          overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
          contentStyle={{
            padding: 0,
            border: "none",
            background: "transparent",
          }}
        >
          {(close) => (
            <div className="drawer-popup">
              <button className="drawer-close-btn" onClick={close}>
                <IoCloseOutline className="close-icon" />
              </button>
              <ul className="drawer-menu-list">
                {navLinks.map((link, index) => (
                  <Link to={link.path} key={link.id}>
                    <motion.li
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                      className={
                        active === link.id
                          ? "drawer-item active"
                          : "drawer-item"
                      }
                      onClick={() => setActive(link.id)}
                    >
                      {link.title}
                    </motion.li>
                  </Link>
                ))}
              </ul>

              {/* Navbar Footer */}
              <div className="drawer-footer">
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {" "}
                  <div className="nav-icons-drawer">
                    <a
                      href="https://github.com/sudhakar076020/"
                      target="_blank"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sudhakar-m7602"
                      target="_blank"
                    >
                      <FiLinkedin />
                    </a>
                    <a href="mailto:sudhakar7602m@gmail.com" target="_blank">
                      <FiMail />
                    </a>
                  </div>
                  <div className="drawer-footer-line"></div>
                  <p>
                    © 2025 My Portfolio | <span>Sudhakar</span>
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  );
};

export default Navbar;
