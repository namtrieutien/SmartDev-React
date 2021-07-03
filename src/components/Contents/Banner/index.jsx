import React from "react";
// import PropTypes from "prop-types";
import "./Banner.css";

// Banner.propTypes = {};

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
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item-banner carousel-item active">
            <img
              src={require(`../../../images/slide_02.jpg`).default}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item-banner carousel-item">
            <img
              src={require(`../../../images/slide_04.png`).default}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block ml-5">
              <h1 className="btn btn-warning btn-lg">SUMMER SALE</h1><br />
            </div>
          </div>
          <div className="carousel-item-banner carousel-item">
            <img
              src={require(`../../../images/slide_03.jpg`).default}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block ml-5">
              <h1>SALE UP TO 30%</h1><br />
              <h6>
                ACCESORIES FOR YOUR DOGS
              </h6>
              <button className="btn-banner mt-3">SHOP NOW</button>
            </div>
          </div>
          <div className="carousel-item-banner carousel-item">
            <img
              src={require(`../../../images/slide_01.jpg`).default}
              className="d-block w-100"
              alt="..."
            />
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
