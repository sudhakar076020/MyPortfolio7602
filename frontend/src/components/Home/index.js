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
import { MdOutlineFileDownload } from "react-icons/md"; //Download
import { GoArrowRight } from "react-icons/go"; // Right arrow

const socialMediaIcons = [
  {
    id: "GITHUB",
    icon: <FaGithub className="social-icon" />,
    link: "https://github.com/yourusername",
  },
  {
    id: "LINKEDIN",
    icon: <FaLinkedin className="social-icon" />,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    id: "TWITTER",
    icon: <FaTwitter className="social-icon" />,
    link: "https://twitter.com/yourusername",
  },
  {
    id: "FACEBOOK",
    icon: <FaFacebookSquare className="social-icon" />,
    link: "https://facebook.com/yourusername",
  },
];

const Home = () => {
  return (
    <div className="banner-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="banner-content">
          <p className="greeting">Hello</p>
          <h1 className="name">
            I'm <span>Sudhakar</span>
          </h1>
          <p className="role">MERN Full Stack Web Developer</p>
          <p className="description">
            I create responsive and user-friendly web applications using the
            MERN stack.
          </p>
          <div className="home-buttons-card">
            <button type="button" className="view-my-work-btn">
              View My Work
              <GoArrowRight size={25} className="arrow-icon" />
            </button>
            <button type="button" className="download-resume-btn">
              Download Resume
              <MdOutlineFileDownload size={25} className="download-icon" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="banner-image">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="get-in-touch-container">
              <div className="horizontal-lg-line"></div>
              <button type="button" className="get-in-touch-btn">
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Social media icons */}
          <div className="banner-social-icons">
            {socialMediaIcons.map((icon, index) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  {icon.icon}
                </a>
              </motion.div>
            ))}

            {/* Vertical line and down arrow button */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="vertical-line"></div>
              <button type="button" className="circle-btn">
                <GoTriangleDown className="down-arrow-icon" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
