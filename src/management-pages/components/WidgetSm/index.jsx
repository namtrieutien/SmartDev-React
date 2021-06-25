import React from "react";
// import PropTypes from "prop-types";

import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

// WidgetSm.propTypes = {};

function WidgetSm(props) {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        <li className="widget-sm-item">
          <img
            src="https://avatars.dicebear.com/api/bottts/z.svg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">freddie mercury</span>
            <span className="widget-sm-user-title">Singer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-item">
          <img
            src="https://avatars.dicebear.com/api/bottts/x.svg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">freddie mercury</span>
            <span className="widget-sm-user-title">Singer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-item">
          <img
            src="https://avatars.dicebear.com/api/bottts/y.svg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">freddie mercury</span>
            <span className="widget-sm-user-title">Singer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-item">
          <img
            src="https://avatars.dicebear.com/api/bottts/w.svg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">freddie mercury</span>
            <span className="widget-sm-user-title">Singer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
        <li className="widget-sm-item">
          <img
            src="https://avatars.dicebear.com/api/bottts/f.svg"
            alt=""
            className="widget-sm-img"
          />
          <div className="widget-sm-user">
            <span className="widget-sm-username">freddie mercury</span>
            <span className="widget-sm-user-title">Singer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className="widget-sm-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
