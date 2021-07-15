import React from 'react';
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import AddToCart from '../Cart/AddToCart';

import { VNDformat } from '../../helpers/utils';
import './index.css'
const CardPost = (props) => {
  const { id, title, description, price, category, image } = props.post;
  return (
    <div className="col-md-2">
      <div className="product-item mb-5 bg-light">
        <div className="down-content">
          <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
            <img className="mb-2 fix-image" src={image} alt=""/>
            <h4 className="text-break-head">{title.trim()}</h4>
            <div className="text-break">
              <p>{description.trim()}</p>
            </div>
          </Link>
          <div className="row d-flex justify-content-between">
            <div className="ml-3">
              <AddToCart item={props.post} />
            </div>
            {/* <div className=""> */}
            <p style={{ fontSize: '14px' }} className="text-danger font-weight-bold mr-2">{VNDformat(price)}</p>
            {/* </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}
CardPost.propTypes = {
  post: PropTypes.object,
}
export default CardPost;