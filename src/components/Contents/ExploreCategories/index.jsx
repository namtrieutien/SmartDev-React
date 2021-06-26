import React from "react";
// import PropTypes from "prop-types";

import "./ExploreCategories.css";

// ExploreCategories.propTypes = {};

function ExploreCategories(props) {
  return (
    <div className="explore-categories mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="section-heading">
              <h2>Explore Categories</h2>
            </div>
          </div>
          <div className="col-md-2">
            {/* <!-- Controls --> */}
            <div className="controls pull-right hidden-xs">
              <a
                className="left btn btn-danger mr-2"
                href="/carousel-example"
                data-slide="prev"
              >
                <i className="fas fa-chevron-left"></i>
              </a>
              <a
                className="right btn btn-danger"
                href="#carousel-example"
                data-slide="next"
              >
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="explore-items d-flex flex-row justify-content-around">
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-home"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-car"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-paw"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-plug"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-laptop"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-coffee"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-couch"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-air-freshener"></i>
                <h5>Car</h5>
              </div>
            </div>
            <div className="">
              <div className="category-item d-flex flex-column justify-content-around">
                <i className="fas fa-tshirt"></i>
                <h5>Car</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ExploreCategories;
