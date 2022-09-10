import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Turn as Hamburger } from "hamburger-react";
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
      <div className="btn" onClick={toggleNav}>
        <Hamburger
          toggled={toggleMenu}
          toggle={toggleMenu}
          easing="ease-in"
          distance="md"
          size={20}
          color="white"
        />
      </div>
      <div className="logo-section">
        <div class="img-logo"></div>
        <Link to="/" className="site-logo">
          PICT MUN
        </Link>
      </div>
      {(toggleMenu || screenWidth > 500) && (
        <div className="navAdjust">
          <ul className="list">
            <Link
              to="/ourteam"
              style={{ textDecoration: "none" }}
              onClick={toggleNav}
            >
              <li className="nav-link nav-link-ltr">Our Team</li>
            </Link>
            <Link
              to="/committees"
              style={{ textDecoration: "none" }}
              onClick={toggleNav}
            >
              <li className="nav-link nav-link-ltr">Committees</li>
            </Link>
            <Link
              to="/contactus"
              style={{ textDecoration: "none" }}
              onClick={toggleNav}
            >
              <li className="nav-link nav-link-ltr">Contact us</li>
            </Link>
            <Button
              sx={{
                margin: "15px",
                backgroundColor: "hsl(40, 86%, 50%)",
                color: "black",
                "&:hover": { backgroundColor: "hsl(40,86%,45%)" },
              }}
              variant="outlined"
              size="small"
              href="https://mun.pict.edu"
            >
              Club Wesite
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}
