// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from '@mui/material';
// import { Turn as Hamburger } from 'hamburger-react'
// import "./Nav1.css";

// export default function Nav1() {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu);
//   };
//   const DisplayNone = {
//     '@media (max-width: 500px)': {
       
//        margin: 0,
//        padding: 0,
//     },
//     // 'nav_links:nth-child(3)':{
//     //   visibility: 'hidden',
//     // }
//   };
//   useEffect(() => {
//     const changeWidth = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", changeWidth);

//     return () => {
//       window.removeEventListener("resize", changeWidth);
//     };
//   }, []);

//   return (
//     <>
//     <div className="mast-header">
//     {/* <div className="imgr-logo hidelogo"></div> */}
//        <div className='btn' onClick={toggleNav}> 
//           <Hamburger toggled={toggleMenu} toggle={toggleMenu} easing="ease-in" distance="md" size={20} color='white' />
//        </div>
//        <div className="imgr-logo hidelogo"></div>
//       {(toggleMenu || screenWidth > 500) && (
//         <ul className="link_list">
//           <Link to='/ourteam' style={{textDecoration: 'none'}} onClick={toggleNav}>
//             <li className="nav_links">Our Team</li>
//           </Link>
//           <Link to='/committees' style={{textDecoration: 'none'}} onClick={toggleNav}>
//             <li className="nav_links">Committees</li>
//           </Link>
      
//           <Link to='/'  onClick={toggleNav}>
//           <li className="nav_links">
//             <div class='imgr-logo hidelogo1'></div>
//             {/* <div class="logo-mun"></div> */}
//           </li>
//           </Link>
          
//           <a href='https://pictmun.github.io/Newsletter/' target='_blank' style={{textDecoration: 'none'}} onClick={toggleNav}>
//             <li className="nav_links">Newsletter</li>
//           </a>
//           <Link to='/contactus' style={{textDecoration: 'none'}} onClick={toggleNav}>
//             <li className="nav_links">Contact us</li>
//           </Link>
//         </ul>
//       )}
//     </div>
        
//     </>
//   );
// }

