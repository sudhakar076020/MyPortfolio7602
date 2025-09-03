import "./education.css";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Educationsection = () => {
  return (
    <div className="education-section">
      {/* Education Header */}
      <div className="contact-header">
        <h2 className="header-title">Education</h2>
        <p>
          My academic journey and continuous pursuit of knowledge in technology
          and software development.
        </p>
      </div>

      {/* Educations cards */}
      <div className="education-card">
        {/* Left Icon */}
        <div className="left-line">
          <div className="circle"></div>
        </div>

        {/* Card Content */}
        <div className="card-content">
          {/* Icon */}
          <div className="icon-box">
            <FaGraduationCap size={28} color="#4A6CF7" />
          </div>

          <div className="card-main">
            <h2>Bachelor of Science in Computer Science</h2>
            <h4>University of Technology</h4>
            <p>
              Focused on software engineering, data structures, algorithms, and
              web development. Graduated Magna Cum Laude.
            </p>

            <div className="highlights">
              <strong>Key Highlights:</strong>
              <ul>
                <li>Dean&apos;s List for 6 consecutive semesters</li>
                <li>Computer Science Society President</li>
                <li>Published research on machine learning applications</li>
              </ul>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="card-right">
            <div className="info">
              <FaCalendarAlt size={16} /> <span>2018 - 2022</span>
            </div>
            <div className="info">
              <FaMapMarkerAlt size={16} /> <span>San Francisco, CA</span>
            </div>
            <div className="gpa">
              GPA: <span>3.8/4.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educationsection;
