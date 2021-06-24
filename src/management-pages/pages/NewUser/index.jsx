import React from "react";
import PropTypes from "prop-types";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import "./NewUser.css"

NewUser.propTypes = {};

function NewUser(props) {

  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/error" />;
  } else return <Redirect to="/login" />;

  return (
    <div className="newuser">
      <h1 className="newuser-title">
        New User
      </h1>
      <form action="submit" className="newuser-form">
        <div className="newuser-item">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="ricksanchez99" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Rick Sanchez" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="ricksanchez99@gmail.com" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Danang | Vietnam" />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Gender</label>
          <div className="newuser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuser-item">
          <label >Active</label>
          <select className="newuser-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="newuser-button">Create</button>
      </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);

