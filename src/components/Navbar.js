import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from 'hamburger-react'
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
       <div className='btn' onClick={toggleNav}> 
          <Hamburger toggled={toggleMenu} toggle={toggleMenu} easing="ease-in" distance="md" size={20} color='white' />
       </div>
      <div className="logo-section">
        <Link to='/'><div class="img-logo"></div></Link>
      </div>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link to='/ourteam' style={{textDecoration: 'none'}} onClick={toggleNav}>
            <li className="nav-link nav-link-ltr">Our Team</li>
          </Link>
          <Link to='/committees' style={{textDecoration: 'none'}} onClick={toggleNav}>
            <li className="nav-link nav-link-ltr">Committees</li>
          </Link>
          <a href="https://pictmun.github.io/Newsletter/" target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none'}} onClick={toggleNav}>
            <li className="nav-link nav-link-ltr">Newsletter</li>
          </a>
          <Link to='/contactus' style={{textDecoration: 'none'}} onClick={toggleNav}>
            <li className="nav-link nav-link-ltr">Contact us</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
