import React from "react";
import "./Committee.css";

const Committees = () => {
  return (
    <div>
      <div className="outer-wrapper">
        <div className="s-wrap s-type-1" role="slider">
          <input
            type="radio"
            id="s-1"
            name="slider-control"
            checked="checked"
          />
          <input type="radio" id="s-2" name="slider-control" />
          <input type="radio" id="s-3" name="slider-control" />
          <input type="radio" id="s-4" name="slider-control" />
          <input type="radio" id="s-5" name="slider-control" />
          <ul className="s-content">
            <li className="s-item s-item-1"> </li>
            <li className="s-item s-item-2"></li>
            <li className="s-item s-item-3"></li>
            <li className="s-item s-item-4"></li>
            <li className="s-item s-item-5"></li>
          </ul>
          <div className="s-control">
            <label className="s-c-1" for="s-1"></label>
            <label className="s-c-2" for="s-2"></label>
            <label className="s-c-3" for="s-3"></label>
            <label className="s-c-4" for="s-4"></label>
            <label className="s-c-5" for="s-5"></label>
          </div>
          <div className="s-nav">
            <label className="s-nav-1 right" for="s-2"></label>
            <label className="s-nav-2 left" for="s-1"></label>
            <label className="s-nav-2 right" for="s-3"></label>
            <label className="s-nav-3 left" for="s-2"></label>
            <label className="s-nav-3 right" for="s-4"></label>
            <label className="s-nav-4 left" for="s-3"></label>
            <label className="s-nav-4 right" for="s-5"></label>
            <label className="s-nav-5 left" for="s-4"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
