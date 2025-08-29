"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // "about", "qa", or null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const toggleDropdown = (menu, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (href) => pathname === href;

  const isDropdownActive = (prefix) => pathname.startsWith(prefix);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add(styles.darkMode);
    }
  }, []);

  // Apply dark/light mode + persist choice
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darkMode);
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove(styles.darkMode);
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={styles.navbar}
      ref={navRef}
      onClick={() => {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" onClick={handleLinkClick}>
          <img src="/logo.png" alt="Only Jesus Logo" className={styles.logoImg} />
        </Link>
      </div>

      {/* Hamburger */}
      <div 
        className={styles.hamburger} 
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Menu */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ""}`}>
        <li className={isActive("/") ? styles.active : ""}>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
        </li>

        {/* About Dropdown */}
        <li className={`${styles.dropdown} ${isDropdownActive("/about") ? styles.active : ""}`}>
          <button 
            onClick={(e) => toggleDropdown("about", e)}
            className={styles.dropbtn}
          >
            About ▾
          </button>
          {openDropdown === "about" && (
            <ul className={styles.dropdownContent}>
              <li className={isActive("/about/history") ? styles.active : ""}>
                <Link href="/about/history" onClick={handleLinkClick}>Our History</Link>
              </li>
              <li className={isActive("/about/kevin-cross-minchakpu") ? styles.active : ""}>
                <Link href="/about/kevin-cross-minchakpu" onClick={handleLinkClick}>Kevin Cross Minchakpu</Link>
              </li>
              <li className={isActive("/about/contributors") ? styles.active : ""}>
                <Link href="/about/contributors" onClick={handleLinkClick}>Contributors & Authors</Link>
              </li>
              <li className={isActive("/about/contact") ? styles.active : ""}>
                <Link href="/about/contact" onClick={handleLinkClick}>Contact Us</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Q & A Dropdown */}
        <li className={`${styles.dropdown} ${isDropdownActive("/qa") ? styles.active : ""}`}>
          <button 
            onClick={(e) => toggleDropdown("qa", e)}
            className={styles.dropbtn}
          >
            Q & A ▾
          </button>
          {openDropdown === "qa" && (
            <ul className={styles.dropdownContent}>
              <li className={isActive("/qa/church") ? styles.active : ""}>
                <Link href="/qa/church" onClick={handleLinkClick}>Church</Link>
              </li>
              <li className={isActive("/qa/faith-doubt") ? styles.active : ""}>
                <Link href="/qa/faith-doubt" onClick={handleLinkClick}>Faith and Doubt</Link>
              </li>
              <li className={isActive("/qa/homosexuality") ? styles.active : ""}>
                <Link href="/qa/homosexuality" onClick={handleLinkClick}>Homosexuality</Link>
              </li>
              <li className={isActive("/qa/living-christianity") ? styles.active : ""}>
                <Link href="/qa/living-christianity" onClick={handleLinkClick}>Living Christianity</Link>
              </li>
              <li className={isActive("/qa/personal-matters") ? styles.active : ""}>
                <Link href="/qa/personal-matters" onClick={handleLinkClick}>Personal Matters</Link>
              </li>
              <li className={isActive("/qa/politics") ? styles.active : ""}>
                <Link href="/qa/politics" onClick={handleLinkClick}>Politics</Link>
              </li>
              <li className={isActive("/qa/prayer") ? styles.active : ""}>
                <Link href="/qa/prayer" onClick={handleLinkClick}>Prayer</Link>
              </li>
              <li className={isActive("/qa/marriage") ? styles.active : ""}>
                <Link href="/qa/marriage" onClick={handleLinkClick}>Marriage</Link>
              </li>
              <li className={isActive("/qa/dating") ? styles.active : ""}>
                <Link href="/qa/dating" onClick={handleLinkClick}>Dating</Link>
              </li>
            </ul>
          )}
        </li>

        <li className={isActive("/books") ? styles.active : ""}>
          <Link href="/books" onClick={handleLinkClick}>Books</Link>
        </li>
        <li className={isActive("/blog") ? styles.active : ""}>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
        </li>
        <li className={isActive("/articles") ? styles.active : ""}>
          <Link href="/articles" onClick={handleLinkClick}>Articles</Link>
        </li>
        <li className={`${styles.donate} ${isActive("/donate") ? styles.active : ""}`}>
          <Link href="/donate" onClick={handleLinkClick} className={styles.donate}>
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
} 
