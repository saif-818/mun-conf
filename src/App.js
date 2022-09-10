import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OurTeam from './components/OurTeam/OurTeam';
import Committee from './components/Committee';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Navbar';
import NewNavbar from "./components/NewNavbar/NewNavbar"
const App = () => {
  
    return(
       <>
       {/* <Navbar/> */}
       <NewNavbar/>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="committees" element={<Committee />} />
            <Route path="ourteam" element={<OurTeam />} />
            <Route path="contactus" element={<ContactUs />} />
          </Routes>
       </>
    );
  
}
  
export default App;
