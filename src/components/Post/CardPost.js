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
      <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
        <div className="product-item mb-5 bg-light">
          <img className="mt-3" src={image} alt=""/>
          <div className="down-content">
            <h4 className="text-break-head">{title.trim()}</h4>
            <div className="text-break">
              <p>{description.trim()}</p>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="ml-3">
                <AddToCart item={props.post} />
              </div>
              {/* <div className=""> */}
                <p style={{fontSize: '14px'}} className="text-danger font-weight-bold mr-2">{VNDformat(price)}</p>
              {/* </div> */}
            </div>
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