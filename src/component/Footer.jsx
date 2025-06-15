
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-item">
          <FaMapMarkerAlt />
          <div>
            <p style={{ margin: 0 }}>meerut 250003 subharti University </p>
            <strong>Uttar Pradesh , India</strong>
          </div>
        </div>

        <div className="footer-item">
          <FaPhone />
          <strong>+916205506507</strong>
        </div>

        <div className="footer-item footer-contact">
          <FaEnvelope />
          <a href="mailto:support@company.com">chandrabhushankumar27080@gmail.com</a>
        </div>
      </div>

      <div className="footer-section footer-about">
        <h4> SkillHive</h4>
        <p>
          SkillHive empowers learners with expert-led courses, practical skills, and personalized learning paths to grow careers, enhance knowledge, and achieve lifelong success
        </p>
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/chandra-bhushan-roy-165574305/"><FaLinkedinIn /></a>
          <a href="https://github.com/CBROY62"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
