import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
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
       <button onClick={toggleNav} className="btn">
          <MenuIcon fontSize="medium" />
       </button>
      <div className="logo-section">
        <div class="img-logo"></div>
        <a href="#home" class="site-logo">PICT MUN</a>
      </div>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link to='/ourteam'>
            <li className="items">Our Team</li>
          </Link>
          <Link to='/resources'>
            <li className="items">Resources</li>
          </Link>
          <Link to='/committees'>
            <li className="items">Committees</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
