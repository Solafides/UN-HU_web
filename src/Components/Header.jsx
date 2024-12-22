import React, { useState,useEffect,useRef } from 'react';
import icon from '../commonResource/images/home/search-icon-sm.png';
import logo from "../commonResource/images/home/2.png";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => { 
    if (menuRef.current && !menuRef.current.contains(event.target)) 
      { setIsMenuOpen(false); 
      } };
       
      useEffect(() => { document.addEventListener('mousedown', handleClickOutside); 
        return () => { document.removeEventListener('mousedown', handleClickOutside);
         }; },
          []);

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="">
            <img className="unLogo rounded-pill" src={logo} alt="Logo" />
          </Link>
          <div ref={menuRef} className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <span className="cancel" onClick={toggleMenu}>×</span>
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Home/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/About/">
                  About_Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Teams/">
                  Our_Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/SDG">
                  SDG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Search/">
                  <img src={icon} alt="Search" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
