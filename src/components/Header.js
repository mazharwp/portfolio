"use client";

import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`aside ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <Link href="/">
          <span>M</span>azhar
        </Link>
      </div>

      <div className="nav-toggler" onClick={toggleMenu}>
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <Link href="/" onClick={closeMenu}>
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>
            <i className="fa fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link href="/resume" onClick={closeMenu}>
            <i className="fa fa-file"></i> Resume
          </Link>
        </li>

        <li>
          <Link href="/services" onClick={closeMenu}>
            <i className="fa fa-list"></i> Services
          </Link>
        </li>
        <li>
          <Link href="/portfolio" onClick={closeMenu}>
            <i className="fa fa-briefcase"></i> Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            <i className="fa fa-comments"></i> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
