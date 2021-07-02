import React, { useState, useEffect } from "react";
import CardPost from "../../Post/CardPost";
import { searchLoading } from '../../../redux/actions/posts/search.action';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// import PropTypes from "prop-types";

// Posts.propTypes = {};

function Posts(props) {
  const params = {
    title: "",
    _page: props.pagination !== undefined ?  props.pagination._page:  props.data.pagination._page,
    // _page: props.pagination._page,
    _limit: props.pagination !== undefined ?  props.pagination._limit:  props.data.pagination._limit,
  }
  console.log(params)
  useEffect(() => {
    props.searchPost(params);
  }, [])
  const postList = Array.from(props.data);
  console.log("postList", postList)
  return (
    <div>
      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Flash Deals</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            {postList!=null ? 
            (postList.map( item => 
            <CardPost
            key={item.id} 
            post = {item} />
            )):
            <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
          }
          </div>
        </div>
      </div>

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Popular Products</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_01.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$25.75</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (24)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_02.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$30.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (21)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_03.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$20.45</h6>
                  <p>
                    Sixteen Clothing is free CSS template provided by
                    TemplateMo.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (36)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_04.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$15.25</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (48)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_05.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$12.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (16)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <a href="/">
                  <img src="assets/images/product_06.jpg" alt="" />
                </a>
                <div className="down-content">
                  <a href="/">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$22.50</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (32)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Sixteen Clothing</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This template
                  </a>{" "}
                  is free to use for your business websites. However, you have
                  no permission to redistribute the downloadable ZIP file on any
                  template collection website.{" "}
                  <a rel="nofollow" href="https://templatemo.com/contact">
                    Contact us
                  </a>{" "}
                  for more info.
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="/">Lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a href="/">Consectetur an adipisicing elit</a>
                  </li>
                  <li>
                    <a href="/">It aquecorporis nulla aspernatur</a>
                  </li>
                  <li>
                    <a href="/">Corporis, omnis doloremque</a>
                  </li>
                  <li>
                    <a href="/">Non cum id reprehenderit</a>
                  </li>
                </ul>
                <a href="about.html" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="assets/images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Sixteen</em> Products
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Itaque corporis amet elite author nulla.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <a href="/" className="filled-button">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { load, error,  pagination, data } = state.searchPostReducer;
  return {
    load,
    error,
    pagination, 
    data
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchLoading(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);