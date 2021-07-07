import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import {
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
  VerifiedUser,
} from "@material-ui/icons";

import "./User.css";
import { Link } from "react-router-dom";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect, useParams } from 'react-router-dom';
import adminApi from "../../../api/management/adminApi";

User.propTypes = {};

function User(props) {
  let { userId } = useParams();
  const [userDetail, setUserDetail] = useState({})
  const [address, setAddress] = useState({})
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        console.log("params: ", userId);
        const response = await adminApi.getUser(userId)
        console.log(response);
        setUserDetail(response)
        setAddress(response.address)
      } catch (error) {
        console.log("Failed to fetch user detail :", error);
      }
    }
    fetchUserDetail();
  }, [])

  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/error" />;
  } else return <Redirect to="/login" />;

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
              src={userDetail.avatar ? userDetail.avatar : `https://avatars.dicebear.com/api/avataaars/${userDetail.id}.svg`}
              alt=""
              className="user-show-top-image"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">{userDetail.name}</span>
              <span className="user-show-usertitle">{userDetail.roles}</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-infor">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-infor-title">{userDetail.email}</span>
            </div>
            <div className="user-show-infor">
              <VerifiedUser className="user-show-icon" />
              <span className="user-show-infor-title">auth {userDetail.auth}</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-infor">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-infor-title">+{userDetail.phone}</span>
            </div>
            <div className="user-show-infor">
              <MailOutline className="user-show-icon" />
              <span className="user-show-infor-title">
                {userDetail.email}
              </span>
            </div>
            <div className="user-show-infor">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-infor-title">{address.city} | {address.district} | {address.commune}</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form action="submit" className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={userDetail.name}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={userDetail.email}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={`+ ${userDetail.phone}`}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>City</label>
                <input
                  type="text"
                  placeholder={address.city}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>District</label>
                <input
                  type="text"
                  placeholder={address.district}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Commune</label>
                <input
                  type="text"
                  placeholder={address.commune}
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
