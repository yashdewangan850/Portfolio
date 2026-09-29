"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =====================================================
     SCROLL + ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     MOBILE MENU LOCK
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

 const handleNavClick = (event, href) => {
  event.preventDefault();

  const target = document.querySelector(href);

  if (!target) return;

  const navbarOffset = 85;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  setActiveSection(href.replace("#", ""));

  setMenuOpen(false);

  window.history.replaceState(
    null,
    "",
    href
  );
};

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-inner">

          {/* Logo */}

          <a
            href="#home"
            className="navbar-logo"
            aria-label="Yash Dewangan home"
            onClick={(event) =>
              handleNavClick(event, "#home")
            }
          >
            <span>YD</span>
            <i>.</i>
          </a>


          {/* Desktop Navigation */}

          <nav className="navbar-links">
            {navItems.map((item) => {
              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`navbar-link ${
                    isActive
                      ? "navbar-link-active"
                      : ""
                  }`}
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      className="navbar-active-dot"
                      layoutId="navbar-active-dot"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>


          {/* Right Actions */}

          <div className="navbar-actions">

            <div className="navbar-availability">
              <span />
              Open to work
            </div>

            <a
              href="/Yash_Kumar_Dewangan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume"
            >
              Resume

              <ArrowUpRight size={14} />
            </a>

          </div>


          {/* Mobile Button */}

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>
      </motion.header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <nav className="mobile-nav-links">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <span>
                    0{index + 1}
                  </span>

                  {item.label}

                  <ArrowUpRight size={16} />
                </motion.a>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <span>
                SOFTWARE DEVELOPER
              </span>

              <span>
                HYDERABAD · INDIA
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}