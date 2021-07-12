import React from "react";
// import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

import "./NewUser.css"
import adminApi from "../../../api/management/adminApi";
// NewUser.propTypes = {};

function NewUser(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { isLoggedIn, user } = props;

  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/error" />;
  } else return <Redirect to="/login" />;

  const createUser = async (data) => {
    try {
      let requestBody = data;
      const response = await adminApi.createUser(requestBody);
    } catch (error) {
      console.log("Failed to create user :", error);
    }
  }

  const onSubmit = (data) => {
    createUser(data)
  };

  return (
    <div className="newuser">
      <h3 className="newuser-title">
        New User
      </h3>
      <form action="submit" className="newuser-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="newuser-item">
          <label htmlFor="">Full Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="newuser-item">
          <label htmlFor="">Password</label>
          <input type="password" {...register("password")}></input>        
        </div>
        <div className="newuser-item">
          <label htmlFor="">Phone</label>
          <input type="text" {...register("phone")}/>
        </div>
        <div className="newuser-item">
          <label htmlFor="">City</label>
          <input type="text" {...register("city")}/>
        </div>
        <div className="newuser-item">
          <label htmlFor="">District</label>
          <input type="text" {...register("district")}/>
        </div>
        <div className="newuser-item">
          <label htmlFor="">Commune</label>
          <input type="text" {...register("commune")}/>
        </div>
        <div className="newuser-item">
          <label htmlFor="">Roles</label>
          <div className="newuser-role" >
            <input type="radio" name="role" id="admin" value="ROLE_ADMIN" {...register("role")}/>
            <label for="admin">Admin</label>
            <input type="radio" name="role" id="user" value="ROLE_USER" {...register("role")}/>
            <label for="female">User</label>
          </div>
        </div>
        <div className="newuser-item">
          <label >Active</label>
          <select className="newuser-select" name="active" id="active" {...register("auth")}>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <button className="newuser-button" type="submit">Create</button>
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

