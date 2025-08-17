"use client";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaArrowUp, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topFooter}>
        {/* Left Column: Logo */}
        <div className={styles.left}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>

        {/* Middle Column: Description */}
        <div className={styles.middle}>
          <p>
            Kevin Cross Minchakpu is a Christian writer dedicated to exploring the challenges and 
            hopes of faith in everyday life, offering thoughtful guidance and inspiration to readers 
            seeking a deeper walk with God.
          </p>
        </div>

        {/* Right Column: Connect Section */}
        <div className={styles.right}>
          <h3>Connect</h3>
          <ul className={styles.links}>
            <li>
              <a href="/newsletter">📄 Free Newsletter</a>
            </li>
            <li>
              <a href="/contact">✉️ Get In Touch</a>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomFooter}>
        <p>© 2025 Only Jesus. All Rights Reserved. | Designed & Developed by <a className={styles.author} href="https://www.linkedin.com/in/kevin-cross-minchakpu-7897379a" target="_blank" rel="noreferrer">Kevin Cross Minchakpu</a></p>
        <div className={styles.bottomLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/accessibility">Accessibility Statement</a>
        </div>
        <button onClick={scrollToTop} className={styles.backToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
