import "./index.css";
import { motion } from "framer-motion"; // Importing framer-motion for animations

// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa"; // Social media icons
import { GoTriangleDown } from "react-icons/go"; //Down arrow icon

import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="banner-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="banner-content">
            <p className="greeting">Hello</p>
            <h1 className="name">I'm Sudhakar</h1>
            <p className="role">MERN Full Stack Web Developer</p>
            <div className="home-buttons-card">
              <button type="button" className="more-about-btn">
                MORE ABOUT ME
              </button>
              <button type="button" className="get-in-touch-btn">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </motion.div>

        <div className="get-my-cv-sm-container">
          <div className="horizontal-line"></div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <button type="button" className="get-my-cv-btn">
              GET MY CV
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="banner-image">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.10 }}
            >
              <div className="get-my-cv-lg-container">
                <div className="horizontal-lg-line"></div>
                <button type="button" className="get-my-cv-btn">
                  GET MY CV
                </button>
              </div>
            </motion.div>

            <div className="banner-social-icons">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare className="social-icon" />
                </a>
                <div className="vertical-line"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <button type="button" className="circle-btn">
                  <GoTriangleDown className="down-arrow-icon" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
