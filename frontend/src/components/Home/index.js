import { FiDownload } from "react-icons/fi";
import "./index.css";

const Home = () => {
  return (
    <>
      <section className="banner">
        {/* Left Content */}
        <div className="banner-text">
          <p className="intro">Hello, I'm</p>
          <h1>
            <span className="highlight">Sudhakar</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p className="description">
            Passionate about creating exceptional digital experiences through
            responsive web and mobile applications. I specialize in modern
            technologies and love turning complex problems into simple,
            beautiful solutions.
          </p>

          <div className="banner-buttons">
            <button className="btn-primary">View My Work</button>
            <button className="btn-outline">
              <FiDownload /> Download CV
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="banner-image">
          <div className="profile-pic">
            <img
              src="https://res.cloudinary.com/dehz5pshe/image/upload/v1754581732/WhatsApp_Image_2025-08-07_at_9.12.40_PM_dlulyu.jpg"
              alt="Profile"
            />
          </div>

          {/* Floating skill cards */}
          <div className="card card-left-top">Frontend Development</div>
          <div className="card card-left-bottom">Web Applications</div>
          <div className="card card-right-top">Backend Development</div>
        </div>
      </section>
    </>
  );
};

export default Home;
