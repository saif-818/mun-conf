import React from 'react';
import Footer from './Footer';
import CitiesSlider from './CitiesSlider';
import Navbar from './Navbar';
import Timer from './Timer';
import Director from './Director/PhotoA';
import img_1 from './images/img_1.jpg';
import img_2 from './images/img_2.jpg';
import img_3 from './images/img_3.jpg';
import img_4 from './images/img_4.jpg';
import img_5 from './images/img_5.jpg';


const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: img_1,
  },
  {
    city: 'Singapore',
    img: img_2,
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: img_3,
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: img_4,
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: img_5,
  },
];

function LandingPage() {
//   const classes = useStyles();
  return (
    <div>
        <Navbar />
        <CitiesSlider slides={slides}/>
        <Timer />
        <Director />
        <Footer />
    </div>
  )
}

export default LandingPage;