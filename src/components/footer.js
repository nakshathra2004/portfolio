import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Nakshathra Nambiar. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://leetcode.com/u/Nakshathra_Nambiar/" target="_blank" rel="noopener noreferrer">
              <span className="social-icon"><SiLeetcode /></span> LeetCode
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nakshathra-nambiar/" target="_blank" rel="noopener noreferrer">
              <span className="social-icon"><FaLinkedin /></span> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/nakshathra2004" target="_blank" rel="noopener noreferrer">
              <span className="social-icon"><FaGithub /></span> GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}