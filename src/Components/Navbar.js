import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/PAK PAK LOGO FINAL.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
          <img src={logo} alt="Pak Pak Chicken logo" className="navbar-logo" />
          <div className="brand-copy">
            <span className="logo-text">Pak Pak Chicken</span>
            <span className="brand-tagline">Sri Lankan Chicken Street Flavors</span>
          </div>
        </Link>
        <button className="mobile-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <Link to="/" className={navLinkClass("/")} onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/menu" className={navLinkClass("/menu")} onClick={() => setOpen(false)}>
          Menu
        </Link>
        <Link to="/about" className={navLinkClass("/about")} onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/contact" className={navLinkClass("/contact")} onClick={() => setOpen(false)}>
          Contact
        </Link>
        <a
          href="https://www.ubereats.com/store/pak-pak-chicken/LekQ6XcyQB60DrjpVRc6sQ"
          className="nav-cta"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;