import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            LEARN <i class="fas fa-book-reader"></i>
          </Link>
        </div>
        <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-bars" : "fas fa-times"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Recommended
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
