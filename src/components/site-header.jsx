"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        dureation: 500,
        block: "start",
      });
    }
  };

  return (
    <nav className="nav">
      <Link href="#top" className="brand">
        YK<span>•</span>
      </Link>

      <div className="navlinks">
        <a href="#work" onClick={scrollToSection("work")}>
          Work
        </a>

        <a href="#about" onClick={scrollToSection("about")}>
          About
        </a>

        <a href="#contact" onClick={scrollToSection("contact")}>
          Contact
        </a>

        <a
          href="/Yash_Kumar_Dewangan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <button
        className="theme"
        aria-label="Toggle color theme"
        onClick={() => setDark(!dark)}
      >
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </nav>
  );
}