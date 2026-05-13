import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="copyright">
          &copy; 2026 Nisal Indusara. All rights reserved.
        </p>

        <p className="project-context">
          Built as a guided project for Coursera. Weather data provided by the{" "}
          <a
            href="http://www.7timer.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            7Timer! API
          </a>
          .
        </p>

        <div className="social-links">
          {/* Using GitLab based on your typical deployment stack */}
          <a
            href="https://gitlab.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLab
          </a>
          <span className="divider">•</span>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
