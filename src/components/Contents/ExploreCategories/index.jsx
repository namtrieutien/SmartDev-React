import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./ExploreCategories.css";

ExploreCategories.propTypes = {};

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
                className="left fa fa-chevron-left btn btn-danger mr-2"
                href="#carousel-example"
                data-slide="prev"
              ></a>
              <a
                className="right fa fa-chevron-right btn btn-danger"
                href="#carousel-example"
                data-slide="next"
              ></a>
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
              <FontAwesomeIcon icon={faCoffee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCategories;
