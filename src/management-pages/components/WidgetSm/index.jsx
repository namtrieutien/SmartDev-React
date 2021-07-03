import React, { useEffect } from "react";
// import PropTypes from "prop-types";

import adminApi from "../../../api/management/adminApi";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { widgetSmList } from "../../dummyData";
import { Link } from "react-router-dom";

// WidgetSm.propTypes = {};
const WidgetSmList = (props) => {
  const list = widgetSmList;

  useEffect(() => {
    const fetchLastestPost = async () => {
      try {
        const response = await adminApi.getFiveNewestUsers();
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch newest users", error);
      }
    };

    fetchLastestPost();
  });

  const listUsers = list.map((user) => (
    <li className="widget-sm-item" key={user.id}>
      <img
        src={user.img}
        alt="user img"
        className="widget-sm-img"
        width="400"
      />
      <div className="widget-sm-user">
        <span className="widget-sm-username">{user.name}</span>
        <span className="widget-sm-user-title">{user.date}</span>
      </div>

      <Link
        className="link-wrapper-widget-sm"
        to={`/management/users/${user.id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <button className="widget-sm-button">
          <Visibility className="widget-sm-icon" />
          Display
        </button>
      </Link>
    </li>
  ));

  return <ul className="widget-sm-list">{listUsers}</ul>;
};

function WidgetSm(props) {
  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      <WidgetSmList />
    </div>
  );
}

export default WidgetSm;
