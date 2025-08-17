"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // "about", "qa", or null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus after clicking a link
  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/logo.png" alt="Only Jesus Logo" className={styles.logoImg} />
      </div>

      {/* Hamburger */}
      <div 
        className={styles.hamburger} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Menu */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ""}`}>
        <li><a href="/" onClick={handleLinkClick}>Home</a></li>
        
        {/* About Dropdown */}
        <li className={styles.dropdown}>
          <button 
            onClick={() => toggleDropdown("about")}
            className={styles.dropbtn}
          >
            About ▾
          </button>
          {openDropdown === "about" && (
            <ul className={styles.dropdownContent}>
              <li><a href="/about/history" onClick={handleLinkClick}>Our History</a></li>
              <li><a href="/about/kevin-cross-minchakpu" onClick={handleLinkClick}>Kevin Cross Minchakpu</a></li>
              <li><a href="/about/contributors" onClick={handleLinkClick}>Contributors & Authors</a></li>
              <li><a href="/about/contact" onClick={handleLinkClick}>Contact Us</a></li>
            </ul>
          )}
        </li>

           {/* Q & A Dropdown */}
        <li className={styles.dropdown}>
          <button 
            onClick={() => toggleDropdown("qa")}
            className={styles.dropbtn}> Q & A ▾ </button>
          {openDropdown === "qa" && (
            <ul className={styles.dropdownContent}>
              <li><a href="/qa/church" onClick={handleLinkClick}>Church</a></li>
              <li><a href="/qa/faith-doubt" onClick={handleLinkClick}>Faith and Doubt</a></li>
              <li><a href="/qa/homosexuality" onClick={handleLinkClick}>Homosexuality</a></li>
              <li><a href="/qa/living-christianity" onClick={handleLinkClick}>Living Christianity</a></li>
              <li><a href="/qa/personal-matters" onClick={handleLinkClick}>Personal Matters</a></li>
              <li><a href="/qa/politics" onClick={handleLinkClick}>Politics</a></li>
              <li><a href="/qa/prayer" onClick={handleLinkClick}>Prayer</a></li>
              <li><a href="/qa/marriage" onClick={handleLinkClick}>Marriage</a></li>
              <li><a href="/qa/dating" onClick={handleLinkClick}>Dating</a></li>
            </ul>
          )}
        </li>
        <li><a href="/books" onClick={handleLinkClick}>Books</a></li>
        <li><a href="/blog" onClick={handleLinkClick}>Blog</a></li>
        <li><a href="/articles" onClick={handleLinkClick}>Articles</a></li>
      </ul>
    </nav>
  );
}
