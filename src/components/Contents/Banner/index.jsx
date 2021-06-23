import React from "react";
import PropTypes from "prop-types";

import "./Banner.css";

Banner.propTypes = {};

function Banner(props) {
  return (
    <div className="Banner">
      {/* <!-- Banner Starts Here --> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/slide_01.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>First slide label</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </h6>
              <button className="btn-banner mt-3">Find more</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slide_02.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </h6>
              <button className="btn-banner mt-3">Find more</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/slide_03.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                repudiandae.
              </h6>
              <button className="btn-banner mt-3">Find more</button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!-- Banner Ends Here --> */}
    </div>
  );
}

export default Banner;
