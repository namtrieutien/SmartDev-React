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
        <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
          <img className="mt-3" src={image} alt=""/></Link>
          <div className="down-content">
            <h4 className="text-break-head">{title}</h4>
            <div className="text-break">
              <p>{description}</p>
            </div>
            <div className="row">
              <div className="col">
                <h6 style={{fontSize: '0.7vw'}}>{VNDformat(price)}</h6>
              </div>
            </div>
            <AddToCart item={props.post} />
          </div>
        </div>
    </div>
  )
}
CardPost.propTypes = {
  post: PropTypes.object,
}
export default CardPost;