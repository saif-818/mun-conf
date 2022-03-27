import React, { useState, useEffect } from "react";
import "./CitiesSlider.scss";
import classNames from "classnames";

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
      <p className="slider__top-heading">Conference</p>
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
              <h3 className='event-schedule' style={{marginBottom:'5px',fontWeight:'200'}}>30th April to 1st May 2022</h3>
              {/* <p className="slider__slide-readmore">read more</p> */}
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
