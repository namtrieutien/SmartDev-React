import React from "react";
// import PropTypes from "prop-types";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";

import "./User.css";
import { Link } from "react-router-dom";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

User.propTypes = {};

function User(props) {
  
  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/error" />;
  } else return <Redirect to="/login" />;

  console.log("calling user");

  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/management/users/create">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://avatars.dicebear.com/api/avataaars/.svg"
              alt=""
              className="user-show-top-image"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Rick Sanchez</span>
              <span className="user-show-usertitle">The Scientist</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-infor">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-infor-title">ricksanchez99</span>
            </div>
            <div className="user-show-infor">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-infor-title">10.12.1999</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-infor">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-infor-title">+1 123 456 67</span>
            </div>
            <div className="user-show-infor">
              <MailOutline className="user-show-icon" />
              <span className="user-show-infor-title">
                ricksanchez99@gmail.com
              </span>
            </div>
            <div className="user-show-infor">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-infor-title">Danang | Vietnam</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form action="submit" className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="ricksanchez99"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="rick sanchez"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="ricksanchez99@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Danang | Vietnam"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-load">
                <img
                  className="user-update-image"
                  src="https://avatars.dicebear.com/api/avataaars/a.svg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    isLoggedIn,
    user
  };
}
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(loginUserAction(email, password))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
