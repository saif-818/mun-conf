import React from "react";
import "./OurTeam.css"

const OurTeam = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-around">
          <div className="card-deck d-flex justify-content-around">
            <div className="card border-0 col-sm-3 p-0">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1584937247987-07276272d215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title h4">Person</h4>
                <h5 className="card-date">Leader</h5>
                <p className="card-text flex">
                  <i className="px-2">Instagram</i>
                  <i className="px-2">LinkedIn</i>
                  <i className="px-2">Facebook</i>
                </p>
              </div>
            </div>
            <div className="card border-0 col-sm-3 p-0">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1584937248081-634bb38393fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title h4">Person</h4>
                <h5 className="card-date">Leader</h5>
                <p className="card-text flex">
                  <i className="px-2">Instagram</i>
                  <i className="px-2">LinkedIn</i>
                  <i className="px-2">Facebook</i>
                </p>
              </div>
            </div>
            <div className="card border-0 col-sm-3 p-0">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1584937248081-634bb38393fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title h4">Person</h4>
                <h5 className="card-date">Leader</h5>
                <p className="card-text flex">
                  <i className="px-2">Instagram</i>
                  <i className="px-2">LinkedIn</i>
                  <i className="px-2">Facebook</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
