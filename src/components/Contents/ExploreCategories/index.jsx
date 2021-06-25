import React from "react";
// import PropTypes from "prop-types";

import "./ExploreCategories.css";

// ExploreCategories.propTypes = {};

function ExploreCategories(props) {
  return (
    <div className="explore-categories mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="section-heading">
              <h2>Explore Categories</h2>
            </div>
          </div>
          <div className="col-md-3">
            {/* <!-- Controls --> */}
            <div className="controls pull-right hidden-xs">
              <a
                className="left btn btn-danger mr-2"
                href="/carousel-example"
                data-slide="prev"
              ><i className="fas fa-chevron-left"></i></a>
              <a
                className="right btn btn-danger"
                href="#carousel-example"
                data-slide="next"
              ><i className="fas fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-home"></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-car"></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-paw"></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-plug"></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-laptop"></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="category-item">
              <i className="fa fa-coffee"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCategories;
