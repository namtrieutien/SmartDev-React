import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
 
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

const LoadingFrame = (props) => {
  return (
    <div className="">
          <div className="user-show-top">
            <div className="user-show-top-image"><Skeleton circle={true} height={40} width={40} /></div>
            <div className="user-show-top-title">
              <span className="user-show-username"><Skeleton width="150px"/></span>
              <span className="user-show-usertitle"><Skeleton /></span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-infor">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-infor-title"></span>
              <span><Skeleton width="150px"/></span>
            </div>
            <div className="user-show-infor">
              <VerifiedUser className="user-show-icon" />
              <span className="user-show-infor-title">auth &ensp;</span>
              <span><Skeleton width="20px"/></span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-infor">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-infor-title">+&ensp;</span>
              <span><Skeleton width="150px"/></span>
            </div>
            <div className="user-show-infor">
              <MailOutline className="user-show-icon" />
              <span className="user-show-infor-title">
              </span>
              <span><Skeleton width="150px"/></span>
            </div>
            <div className="user-show-infor">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-infor-title"></span>
              <span><Skeleton width="50px"/>&ensp;|</span>
              <span><Skeleton width="50px"/>&ensp;| &ensp;</span>
              <span><Skeleton width="50px"/></span>
            </div>
          </div>
        </div>
  )
}

function LoadedFrame(props) {
  const {userDetail, address, role} = props;

  return (
    <div className="">
          <div className="user-show-top">
            <img
              src={userDetail.avatar ? userDetail.avatar : `https://avatars.dicebear.com/api/micah/${userDetail.name}.svg`}
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
  )
}

function User(props) {
  let { userId } = useParams();
  const [userDetail, setUserDetail] = useState({})
  const [address, setAddress] = useState({})
  const [role, setRole] = useState([])
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name : userDetail.name,
      email : userDetail.email,
      phone : userDetail.phone, 
      commune : address.commune,
      district : address.district,
      city : address.city,
      role: role
  }
  });
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        console.log("calling effect");
        setLoading(false);
        const response = await adminApi.getUser(userId)
        setUserDetail(response)
        setAddress(response.address)
        setRole(response.roles)
        setLoading(true);

        reset(response);
      } catch (error) {
        console.log("Failed to fetch user detail :", error);
      }
    }
    fetchUserDetail();
  }, [reset, userId])

  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/error" />;
  } else return <Redirect to="/login" />;

  
  const updateUserDetail = async (data) => {
    try {
      let requestBody = data;
      requestBody["userId"] = userId;
      requestBody["addressId"] = address.id
      console.log("request: ", requestBody);
      const response = await adminApi.updateUser(requestBody);
      console.log(response);
      setUserDetail(response)
      setAddress(response.address)
      setRole(response.roles)
    } catch (error) {
      console.log("Failed to update user detail :", error);
    }
  }

  const onSubmit = (data) => {
    updateUserDetail(data);
  }

  return (
    <div className="user">
      <SkeletonTheme color="#e1e1f1" highlightColor="c7c7f3">
      <div className="user-title-container">
        <h2 className="user-title">Edit User</h2>
        <Link to="/management/users/create">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
        { loading === true ?
          <LoadedFrame userDetail={userDetail} address={address} role = {role}/>
          : <LoadingFrame /> }
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form onSubmit={handleSubmit(onSubmit)} action="submit" className="user-update-form"> 
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  {...register('name')}
                  defaultValue={userDetail.name}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>  
                <input
                  type="text"
                  name="email"
                  {...register('email')}
                  defaultValue={userDetail.email}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  {...register('password', {
                    required: "Required",
                  })}
                  placeholder="password"
                  className="user-update-input"
                />
                <div>{errors.message && errors.message.message}</div>
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  {...register('phone')}
                  defaultValue={userDetail.phone}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  {...register('role')}
                  defaultValue={role}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  {...register('city')}
                  defaultValue={address.city}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>District</label>
                <input
                  type="text"
                  name="district"
                  {...register('district')}
                  defaultValue={address.district}
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Commune</label>
                <input
                  type="text"
                  name="commune"
                  {...register('commune')}
                  defaultValue={address.commune}
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
              <button className="user-update-button" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
      </SkeletonTheme>
      
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
