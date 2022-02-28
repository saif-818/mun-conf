import React from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Committees from './components/Committees';
import OurTeam from './components/OurTeam';
import Resources from './components/Resources';

const App = () => {
  
    return(
       <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="committees" element={<Committees />} />
            <Route path="ourteam" element={<OurTeam />} />
            <Route path="resources" element={<Resources />} />
          </Routes>
       </>
    );
  
}
  
export default App;
