import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

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
        <Link to="/">
          <span>M</span>azhar
        </Link>
      </div>

      <div className="nav-toggler" onClick={toggleMenu}>
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <Link to="/" onClick={closeMenu}>
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            <i className="fa fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <i className="fa fa-file"></i> Resume
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>
            <i className="fa fa-list"></i> Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={closeMenu}>
            <i className="fa fa-briefcase"></i> Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            <i className="fa fa-comments"></i> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
