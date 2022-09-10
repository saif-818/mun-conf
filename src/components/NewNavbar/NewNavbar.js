import React from "react";
import { Link } from "react-router-dom";
import logo from "../pict_white_logo.png";
import "./NewNavbar.css";

const NewNavbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="site-logo ">
          <div className="flex">
            <div class="img-logo"></div>
            <div className="paddinglogo">PICT MUN</div>
          </div>
        </Link>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" id="icon">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul className="ulnav">
          <li className="linav">
            <a href="/" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="/ourteam">Our Team</a>
          </li>
          <li>
            <a href="/committees">Committees</a>
          </li>
          <li>
            <a href="/contactus">Contact us</a>
          </li>
          <li>
            <a href="https://mun.pict.edu">Club Wesite</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewNavbar;
