import React from "react";
// import PropTypes from "prop-types";

import { ArrowDownward, ArrowUpward, SupervisorAccount, PostAdd } from "@material-ui/icons";

import "./FeaturedInfor.css";

// FeaturedInfor.propTypes = {};

function FeaturedInfor(props) {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Users</span>
        <div className="featured-money-container">
          <span className="featured-money">
          2,412
          </span>
          <SupervisorAccount className="personadd-icon"/>
          <span className="featured-money-rate">
            -11 <ArrowDownward className="featured-icon negative"/>
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
        <span className="featured-title">Posts</span>
        <div className="featured-money-container">
          <span className="featured-money">2,912</span>
          <PostAdd className="postadd-icon"/>
          <span className="featured-money-rate">
            +300 <ArrowUpward className="featured-icon"/>
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
