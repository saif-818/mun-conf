import React, { useEffect } from "react";
import { munInfo, secMsg } from "./PhotoB";
import "./PhotoC.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SecMessage from "./SecMessage";
import MunInfo from "./MunInfo";

export default function PhotuA() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="FlexWrap">
      <br />
      {munInfo.map((imag, index) => {
        return (
          <div className="box" data-aos="fade-right" key={index}>
            <div className="img-header-box">
              <div className="header-container">{imag.header}</div>
              <div className="photo-container">
                <img alt="directorphoto" src={imag.image} />
              </div>
            </div>
            <div className="text">
              <MunInfo />
            </div>
          </div>
        );
      })}
      {secMsg.map((imag, index) => {
        return (
          <div className="box" data-aos="fade-right" key={index}>
            <div className="img-header-box">
              <div className="header-container">{imag.header}</div>
              <div className="photo-container">
                <img alt="directorphoto" src={imag.image} />
              </div>
            </div>
            <div className="text">
              <SecMessage />
            </div>
          </div>
        );
      })}
    </div>
  );
}
