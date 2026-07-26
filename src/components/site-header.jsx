"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Timeline", id: "timeline" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  // Load Theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setDark(saved === "dark");
    }
  }, []);

  // Apply Theme
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Scroll Effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => (e) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`nav ${scrolled ? "nav-scroll" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-inner">

        {/* Logo */}

        <Link href="/" className="brand">
          YASH<span>.</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScroll(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}

        <div className="nav-actions">

          <a
            href="/Yash_Kumar_Dewangan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

          <button
            className="theme-btn"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Theme"
          >
            <AnimatePresence mode="wait">

              <motion.div
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>

            </AnimatePresence>
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleScroll(item.id)}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Yash_Kumar_Dewangan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}