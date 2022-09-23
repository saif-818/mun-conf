import React, { useState, useEffect } from "react";
import "./CitiesSlider.scss";
import classNames from "classnames";
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';

const CitiesSlider = (props) => {
  let IMAGE_PARTS = 4;
  let changeTO = null;
  const AUTOCHANGE_TIME = 4000;
  var [activeSlide, setactiveSlide] = useState(-1);
  var [prevSlide, setprevSlide] = useState(-1);
  const [sliderReady, setsliderReady] = useState(false);
  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setactiveSlide(0);
      setsliderReady(true);
    }, 0);

    return function cleanup() {
         window.clearTimeout(changeTO);
    }
  // eslint-disable-next-line
  },[]);
  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  }
  const changeSlides =(change) => {
    window.clearTimeout(changeTO);
    const { length } = props.slides;
    prevSlide=activeSlide;
    activeSlide=prevSlide+change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    setactiveSlide(activeSlide);
    setprevSlide(prevSlide);
  }

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
       

      {/* <p className="slider__top-heading"></p> */}
      <div className="slider__slides">
        {props.slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              {/* <h3 className="slider__slide-subheading">
                { '-Think,Discuss,Prosper-'}
              </h3> */}
              <h4 className="slider__slide-heading">
                {/* {slide.city.split("").map((l) => (
                  <span>{l}</span>
                ))} */}
                {'-Think,Dicuss,Prosper-'}
              </h4>
              {/* <h3 className='event-schedule' style={{marginBottom:'5px',fontWeight:'200'}}>30th April and 1st May 2022</h3> */}
              <div className="timeline_location" style={{display: 'flex',justifyContent: 'space-evenly',alignItems: 'center',margin: '20px'}}>
                <div className="sub_heading1" style={{display: 'flex'}}>
                  <div> <EventIcon/> </div>
                  <div style={{marginLeft: '5px'}}>October 15<sup>th</sup> and 16<sup>th</sup>, 2022</div>
                </div>
                <div className="sub_heading2" style={{display: 'flex'}}>
                  <div style={{marginLeft: '15px'}}> <PlaceIcon/> </div>
                  <div style={{marginLeft: '5px',marginTop: '3px'}}> PICT Pune </div>
                </div>
             </div>
              <a href={'https://linktr.ee/pictmun'} style={{color: 'white',textDecoration: 'none', fontSize: '15px', padding: '10px',border: '2px solid white'}}>Register here</a>
            </div>
            
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};
export default CitiesSlider;
