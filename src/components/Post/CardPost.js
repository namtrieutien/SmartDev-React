import React from 'react';
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import AddToCart from '../Cart/AddToCart';
import { VNDformat } from '../../helpers/utils';
import './index.css'
const CardPost = (props) => {
  const { id, title, description, price, category } = props.post;
  return (
    <div className="col-md-4">
      <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
        <div className="product-item p-3 mb-5 ml-3 bg-light">
          <a href="/">
            <img src="assets/images/product_01.jpg" alt="" />
          </a>
          <div className="down-content">
            <a href="/">
              <h4 className="text-break-head" >{title}</h4>
            </a>
            <div className="text-break"><p>{description}</p>
              
            </div>
            <div className="row">
              {/* <div className="col">
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
              </div> */}
              <div className="col">
                <h6>{VNDformat(price)}</h6>
              </div>
            </div>
            
            <AddToCart item={props.post} />
          </div>
        </div>
      </Link>
    </div>
  )
}
CardPost.propTypes = {
  post: PropTypes.object,
}
export default CardPost;