import { Linkedin, Mail, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="accent">Ria Kusmara</span>. Built with React & ❤️
        </p>
        <div className="footer-socials">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            id="footer-linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-link"
            aria-label="Email"
            id="footer-email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Portfolio"
            id="footer-portfolio"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
