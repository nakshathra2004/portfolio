import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>
          <button
            className="dark-toggle"
            onClick={() => setDark((d) => !d)}
            aria-pressed={dark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;