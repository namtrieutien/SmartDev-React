import React from "react";
// import PropTypes from "prop-types";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

import "./AdminSidebar.css";
import { Link } from "react-router-dom";

// AdminSidebar.propTypes = {};

function AdminSidebar(props) {
  return (
    <div className="sidebar-admin">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/management" className="link" style={{ color: "inherit", textDecoration: "inherit" }}>
              <li className="sidebar-list-item active">
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>

            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick menu</h3>
          <ul className="sidebar-list">
            <Link to="/management/users" className="link" style={{ color: "inherit", textDecoration: "inherit" }}>
              <li className="sidebar-list-item">
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>

            <Link to="/management/product" className="link" style={{ color: "inherit", textDecoration: "inherit" }}>
              <li className="sidebar-list-item">
                <Storefront className="sidebar-icon" />
                Products
              </li>
            </Link>

            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifictions</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
