import React from "react";
// import PropTypes from "prop-types";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import "./FeaturedInfor.css";

// FeaturedInfor.propTypes = {};

function FeaturedInfor(props) {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,412</span>
          <span className="featured-money-rate">
            -11,4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <span className="featured-sub">
          Compared to last month
        </span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$4,412</span>
          <span className="featured-money-rate">
            -1,4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <span className="featured-sub">
          Compared to last month
        </span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,912</span>
          <span className="featured-money-rate">
            +11,4 <ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <span className="featured-sub">
          Compared to last month
        </span>
      </div>
    </div>
  );
}

export default FeaturedInfor;
