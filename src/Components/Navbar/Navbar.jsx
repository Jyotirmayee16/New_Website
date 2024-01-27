import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineMenuFold } from "react-icons/ai";
import logo from '../../images/logo.png';
import './Navbar.css'; 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={logo} alt="app-logo" />
      </div>
      <ul className="app-navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#3dmodel">3D Models</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login">Log In / Registration</a>
        <div />
        <a href="/">Book Demo</a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={handleMenuClick} />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <AiOutlineMenuFold fontSize={27} className="overlay-close" onClick={handleMenuClick} />
            <ul className="app-navbar-smallscreen-links">
              <li><a href="#home" onClick={handleMenuClick}>Home</a></li>
              <li><a href="#services" onClick={handleMenuClick}>Services</a></li>
              <li><a href="#blog" onClick={handleMenuClick}>Blog</a></li>
              <li><a href="#3dmodel" onClick={handleMenuClick}>3D Models</a></li>
              <li><a href="#pages" onClick={handleMenuClick}>Pages</a></li>
              <li><a href="#contact" onClick={handleMenuClick}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
