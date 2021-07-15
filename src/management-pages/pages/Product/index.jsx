import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import { loginUserAction } from "../../../redux/actions/login/authAction";
import adminApi from "../../../api/management/adminApi";
import "./Product.css";
import {
  AssignmentIndOutlined,
  MailOutline,
  PermIdentityOutlined,
  PhoneAndroidOutlined,
} from "@material-ui/icons";

Product.propTypes = {};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Product(props) {
  let { productId } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { isLoggedIn, user } = props;
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        console.log("calling effect");
        setLoading(false);
        const response = await adminApi.getPost(productId);
        setPost(response);
        setLoading(loading);
      } catch (error) {
        console.log("Failed to fetch user detail :", error);
      }
    };
    fetchPostDetail();
  }, []);

  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN")) return <Redirect to="/404" />;
  } else return <Redirect to="/login" />;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="product">
      <div className="product-top">
        <div className="product-top-right">
          <div className="product-infor-top">
            <img
              src={post.image}
              alt="product-img"
              className="product-infor-img"
            />
          </div>
          <div className="product-infor-bottom">
            <div className="product-infor-title">
              <span className="product-name">{post.title}</span>
            </div>
            <div className="product-infor-item">
              <span
                className="product-infor-key"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                {`${post.price} VND`}
              </span>
              <button className="product-remove">Remove</button>
            </div>
            <div className="product-infor-description">
              <span className="product-infor-key">Description: </span>
              <span className="product-infor-description-value">
                {post.description}
              </span>
            </div>
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Product Detail" />
                <Tab label="Seller" />
                <Tab label="Reports" />
              </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
              <div className="content-tab">
                <div className="seller-right">
                  <div className="seller-detail-item">
                    <span className="product-detail-key">ID:</span>
                    <div className="product-detail-value">{post.id}</div>
                  </div>
                  <div className="seller-detail-item">
                    <span className="product-detail-key">Category:</span>
                    <div className="product-detail-value">{post.category}</div>
                  </div>
                  <div className="seller-detail-item">
                    <span className="product-detail-key">Size:</span>
                    <div className="product-detail-value">{post.size}</div>
                  </div>
                  <div className="seller-detail-item">
                    <span className="product-detail-key">Status</span>
                    <div
                      className={
                        post.status === false
                          ? `product-detail-value status-product selling-product`
                          : `product-detail-value status-product sold-product`
                      }
                    >
                      {post.status === false ? "Selling" : "Sold"}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="content-tab-user">
                <div className="seller-left">
                  <img
                    src={post.user && post.user.avatar}
                    alt="owner"
                    className="avatar-seller"
                  />
                </div>
                <div className="seller-right">
                  <div className="seller-detail-item">
                    <PermIdentityOutlined className="seller-icons" />
                    <div>{post.user && post.user.id}</div>
                  </div>
                  <div className="seller-detail-item">
                    <MailOutline className="seller-icons" />
                    <div>{post.user && post.user.email}</div>
                  </div>
                  <div className="seller-detail-item">
                    <AssignmentIndOutlined className="seller-icons" />
                    <div>{post.user && post.user.name}</div>
                  </div>
                  <div className="seller-detail-item">
                    <PhoneAndroidOutlined className="seller-icons" />
                    <div>{post.user && post.user.phone}</div>
                  </div>
                </div>
                {/* <div className="product-infor-owner">
                  <div style={{flex: "1"}}>
                    <img
                      src={post.user && post.user.avatar}
                      alt="owner"
                      className="owner-image"
                    />
                  </div>
                  <span className="product-infor-value-owner">{post.user && post.user.email}</span>
                </div>
                <div className="product-infor-owner"  >
                  <div className="product-infor-key-owner">
                    ID:
                  </div>
                  <div className="product-infor-value-owner">
                    {post.user && post.user.id}
                  </div>
                </div>
                <div className="product-infor-owner">
                  <div className="product-infor-key-owner">
                    Name:
                  </div>
                  <div className="product-infor-value-owner">
                    {post.user && post.user.name}
                  </div>
                </div>
                <div className="product-infor-owner">
                  <div className="product-infor-key-owner">
                    Phone:
                  </div>
                  <div className="product-infor-value-owner">
                    {post.user && post.user.phone}
                  </div>
                </div> */}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="content-tab"></div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    isLoggedIn,
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(loginUserAction(email, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
