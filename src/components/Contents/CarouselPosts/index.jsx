import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

CarouselPosts.propTypes = {};

function CarouselPosts(props) {
  return (
    <div className="container my-5">
      <div className="section-heading">
        <h2>Tin đăng dành cho bạn</h2>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x301"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x302"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x300"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x304"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x301"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x302"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x300"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x304"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x301"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x302"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x300"
                  alt="First slide"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/302x304"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
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
          href="#carouselExampleControls"
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
    </div>
  );
}

export default CarouselPosts;
