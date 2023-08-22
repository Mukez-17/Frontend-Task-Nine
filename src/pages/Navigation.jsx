import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark  fixed-top bg-dark ">
      <div className="container">
        <h1 className="head text-light">
          <Link smooth to="#home" className="nav-link text-light">
            University
          </Link>
        </h1>
        <button
          className="navbar-toggler text-light"
          type="button"
          onClick={handleNav}
        >
          {nav ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto fw-bolder">
            <li className="nav-item">
              <Link smooth to="#home" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#career" className="nav-link text-light">
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth to="#contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#about" className="nav-link text-light">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;