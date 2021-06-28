import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

import "./Product.css";
import Chart from "../../components/Chart";
import { productDataTemp } from "../../dummyData";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
Product.propTypes = {};

function Product(props) {

  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/404" />;
  } else return <Redirect to="/login" />;

  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/management/product/create">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart
            data={productDataTemp}
            title={"Sales Performance"}
            dataKey1={"Sales"}
            dataKey2={"pv"}
          />
        </div>
        <div className="product-top-right">
          <div className="product-infor-top">
            <img
              src="https://source.unsplash.com/random/abc"
              alt="product-img"
              className="product-infor-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-infor-bottom">
            <div className="product-infor-item">
              <span className="product-infor-key">id:</span>
              <span className="product-infor-value">123</span>
            </div>
            <div className="product-infor-item">
              <span className="product-infor-key">sales:</span>
              <span className="product-infor-value">5123</span>
            </div>
            <div className="product-infor-item">
              <span className="product-infor-key">acvite:</span>
              <span className="product-infor-value">Yes</span>
            </div>
            <div className="product-infor-item">
              <span className="product-infor-key">id:</span>
              <span className="product-infor-value">123</span>
            </div>
            <div className="product-infor-item">
              <span className="product-infor-key">in stock</span>
              <span className="product-infor-value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form action="submit" className="product-form">
          <div className="product-form-left">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label htmlFor="">In stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://avatars.dicebear.com/api/gridy/.svg"
                alt="product-upload-img"
                className="product-upload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <div className="product-button">Update</div>
          </div>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Product);
