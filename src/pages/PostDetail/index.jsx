import React, { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux'
import * as yup from "yup";

import "./PostDetail.css"
import { VNDformat } from '../../helpers/utils'
import { addNewToCart, AddToCartAPI } from '../../redux/actions/cartAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import loading from '../../components/Register/login-image/loading.gif';

import { getReportTypes, report, resetStatus } from '../../redux/actions/posts/search.action'

const ReportSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
  type: yup.string().required('Type is required'),
});

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.userReducer;
  return {
    cartList: state.cartReducer.list,
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAPI: (pid) => {
      dispatch(AddToCartAPI(pid));
    },
    addNewToCart: (item) => {
      dispatch(addNewToCart(item));
    },
  };
}

function PostDetail(props) {
  const location = useLocation();
  console.log(location.state.post);
  const { id, title, description, price, category, image, user } = location.state.post;
  const discount = 15
  const price_discount = price * discount / 100
  const price_before = price + price_discount

  const { cartList } = props

  const [status, setStatus] = useState("Add to Cart");
  useEffect(() => {
    const newItem = cartList.find(cartItem => JSON.stringify(cartItem) === JSON.stringify(location.state.post))

    if (JSON.stringify(newItem) === JSON.stringify(location.state.post)) {
      setStatus("Added");
    } else {
      setStatus("Add to Cart")
    }
  }, [cartList])

  const handleCartItemClick = () => {
    props.addNewToCart(location.state.post);
    if (props.isLoggedIn) props.addToCartAPI(id)
  };

  //report
  const dispatch = useDispatch();

  const reportTypes = useSelector(state => {
    return state.searchPostReducer.reportTypes;
  });

  const checkPostReport = useSelector(state => {
    return state.searchPostReducer.checkPostReport;
  });

  const reportData = useSelector(state => {
    return state.searchPostReducer.report;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    dispatch(getReportTypes())
  }, [])

  const clickClose = () => {
    dispatch(resetStatus())
    reset('', {
      keepValues: false,
      keepErrors: false,
    })
  }

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(ReportSchema)
  });

  const onSubmit = (data, e) => {
    dispatch(report({ ...data, postId: window.location.pathname.split('/post/')[1] }));
    reset('', {
      keepValues: false,
      keepErrors: false,
    })
  };

  return (
    <div className="PostDetail">
      <div className={checkPostReport ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <Header />
      <div className="super_container">
        <div className="single_product">
          <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '11px' }}>
            <div className="row">
              <div className="col-lg-4 order-lg-2 order-1 ml-3">
                <div className="image_selected"><img src={image} alt="post_img" /></div>
              </div>
              <div className="col-lg-6 order-3 ml-3">
                <div className="product_description mt-3">
                  {/* <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active">Home</li>
                      <li className="breadcrumb-item active">Products</li>
                      <li className="breadcrumb-item active">{category}</li>
                    </ol>
                  </nav> */}
                  <div className="product_name">{title}</div>
                  {/* <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star" /> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div> */}
                  <div>
                    <span className="product_price text-danger"> {VNDformat(price)}</span>
                    {/* <strike className="product_discount">
                      <span style={{ color: 'black' }}>{VNDformat(price_before)}
                        <span></span>
                      </span>
                    </strike> */}
                  </div>
                  {/* <div>
                    <span className="product_saved">You Saved {discount}%:</span>
                    <span style={{ color: 'black' }}>{VNDformat(price_discount)}
                      <span> </span>
                    </span>
                  </div> */}
                  <hr className="singleline" />
                  <div>
                    <span className="product_info">{description}<span>
                      <br />
                      {/* <span className="product_info">Nhanh tay bấm mua ngày để rinh ngay sản phẩm siêu hót siêu rẻ này thôi<span>
                        <br />
                      </span></span> */}
                    </span></span>
                  </div>
                  {/* <div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="br-dashed">
                          <div className="row">
                            <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" alt="" /> </div>
                            <div className="col-md-9 col-xs-9">
                              <div className="pr-info"> <span className="break-all">Voucher giảm 5% + Miễn phí vẫn chuyển</span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7"> </div>
                    </div> */}
                  {/* <div className="row" style={{ marginTop: '15px' }}>
                      <div className="col-xs-6" style={{ marginLeft: '15px' }}> <span className="product_options">Size</span><br /> <button className="btn btn-primary btn-sm">Small</button> <button className="btn btn-primary btn-sm">Medium</button> <button className="btn btn-primary btn-sm">Big</button> </div>
                    </div> */}
                  {/* </div> */}
                  <hr className="singleline" />
                  <div className="order_info d-flex flex-row">
                    <form action="#">
                    </form></div>
                  <div className="row ml-">
                    {/* <div className="col-xs-6" style={{ marginLeft: '13px' }}>
                      <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} disabled />
                        <div className="quantity_buttons">
                          <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                          <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-xs-6">
                      <div className="col-12 col-md-6 d-flex">
                        <button className="btn btn-outline-primary mr-2" onClick={handleCartItemClick} >
                          <img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`../../components/Profile/img/cart.png`).default} alt="Cart" />{status}
                        </button>
                        <button type="button" className="btn btn-danger shop-button">Buy Now</button>
                      </div>
                      <div className="col-12 col-md-6">
                        <button type="button" className="btn btn-warning shop-button mt-2" data-toggle="modal" data-target="#reportModal">Report</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-underline">
              <div className="col-md-6"> <span className=" deal-text">Specifications</span> </div>
              <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="col-md-12">
                  <tbody>
                    <tr className="row mt-10">
                      <td className="col-6 col-md-4"><span className="p_specification">Owner:</span> </td>
                      <td className="col-6 col-md-8">
                        {user.name}
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-6 col-md-4"><span className="p_specification">Phone:</span> </td>
                      <td className="col-6 col-md-8">
                        {user.phone}
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-6 col-md-4"><span className="p_specification">Email:</span> </td>
                      <td className="col-6 col-md-8">
                        {user.email}
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-6 col-md-4"><span className="p_specification">Address:</span> </td>
                      <td className="col-6 col-md-8">
                        {user.address.commune}, {user.address.district}, {user.address.city}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal fade cart-popup" id="reportModal" tabIndex="-1" role="dialog" aria-hidden="false" modal-toggle>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Report:
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-body">
                      {reportData && <p className="badge badge-success mb-2" style={{ fontSize: "15px" }}>Report Success</p>}
                      <div className="form-group">
                        <label className="control-label">Problem</label>
                        <select {...register("type")}
                          className="form-control"
                        >
                          <option> </option>
                          {reportTypes && Object.keys(reportTypes).map((key, value) => {
                            return (
                              <option value={key} >{reportTypes[key]}</option>
                            )
                          })}
                        </select>
                        {errors.type &&
                          <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px" }}>
                            {errors.type.message}
                          </p>
                        }
                      </div>

                      <div className="form-group">
                        <label className="control-label">Description</label>
                        <div className="">
                          <textarea {...register("description")}
                            id="input-description"
                            className="form-control"></textarea>
                          {errors.description &&
                            <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px" }}>
                              {errors.description.message}
                            </p>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" data-dismiss="modal" onClick={() => clickClose()} >Close</button>
                      <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
