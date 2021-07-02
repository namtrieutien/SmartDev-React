import React from 'react';
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import AddToCart from '../Cart/AddToCart';

import {VNDformat} from '../../helpers/utils'
const CardPost = (props) => {
  const { id, title, description, price, category, image } = props.post;
  return (
    <div className="col-md-4">
      <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
      <div className="product-item">
        <a href="/">
          <img src={image} alt="" />
        </a>
        <div className="down-content">
          <a href="/">
            <h4>{title}</h4>
          </a>
          <h6>{VNDformat(price)}</h6>
          <p>
            {description}
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
          <AddToCart item={props.post} />
          <span>Reviews ({id})</span>
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