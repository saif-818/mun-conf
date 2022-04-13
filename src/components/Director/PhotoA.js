import React, { useEffect } from "react";
import { images } from "./PhotoB";
import "./PhotoC.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function PhotuA() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="FlexWrap">
      <br />
      {images.map((imag, index) => {
        return (
          <div className="box" data-aos="fade-right" key={index}>
            <div className="photo-container">
              <img alt='directorphoto'src={imag.image} />
              <div className="text">
                {
                  imag.text
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
