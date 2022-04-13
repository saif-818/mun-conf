import React from "react";
import './GoogleMap.css';

const GoogleMap = () => {
  const MapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254206!2d73.84864491482712!3d18.457542087445756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR'S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1582`;
  return (
    <div>
      <iframe
        className="maps-frame"
        title="location of college"
        src= {MapSrc}
        width= '500px'
        height= '450px'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;