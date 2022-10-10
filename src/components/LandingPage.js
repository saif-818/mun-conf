import React from 'react';
import Footer from './Footer';
import CitiesSlider from './CitiesSlider';
import Timer from './Timer';
import Director from './Director/PhotoA';
// import img_1 from './images/img_1.jpg';
// import img_2 from './images/img_2.jpg';
// import img_3 from './images/img_3.jpg';
// import img_4 from './images/img_4.jpg';
// import img_5 from './images/img_5.jpg';


const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://ik.imagekit.io/5tdbyiz9d/images/img_1_9pKP1V_EU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659861816203',
  },
  {
    city: 'Singapore',
    img: 'https://ik.imagekit.io/5tdbyiz9d/images/img_2_ImmQJGt9e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659861816671',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://ik.imagekit.io/5tdbyiz9d/images/img_3_OLQx3bM_c.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659861816889',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://ik.imagekit.io/5tdbyiz9d/images/img_4_ROr2Seh0H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659861817463',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://ik.imagekit.io/5tdbyiz9d/images/img_5_LqHEYvmDh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659861817793',
  },
];

function LandingPage() {
//   const classes = useStyles();
  return (
    <div>
        <CitiesSlider slides={slides}/>
        <Timer />
        <Director />
        <Footer />
    </div>
  )
}

export default LandingPage;