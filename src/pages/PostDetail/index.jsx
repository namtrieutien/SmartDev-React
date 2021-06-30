import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'

import "./PostDetail.css"
import { VNDformat } from '../../helpers/utils'
import { addNewToCart, AddToCartAPI } from '../../redux/actions/cartAction'

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
  const { id, title, description, price, category } = location.state.post;
  const discount = 15
  const price_discount = price * discount / 100
  const price_before = price + price_discount

  const handleCartItemClick = () => {
    props.addNewToCart(location.state.post);
    if (props.isLoggedIn) props.addToCartAPI(id)
  };
  
  return (
    <div className="PostDetail">
      <Header />
      <div className="super_container">
        <div className="single_product">
          <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '11px' }}>
            <div className="row">
              <div className="col-lg-4 order-lg-2 order-1 ml-5">
                <div className="image_selected"><img src="https://i.imgur.com/K4b71NV.jpg" alt="post_img" /></div>
              </div>
              <div className="col-lg-6 order-3 ml-5">
                <div className="product_description">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active">Home</li>
                      <li className="breadcrumb-item active">Products</li>
                      <li className="breadcrumb-item active">{category}</li>
                    </ol>
                  </nav>
                  <div className="product_name">⚡⚡{title}</div>
                  <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star" /> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
                  <div> <span className="product_price"> {VNDformat(price)}</span> <strike className="product_discount"> <span style={{ color: 'black' }}>{VNDformat(price_before)}<span> </span></span></strike> </div>
                  <div> <span className="product_saved">You Saved {discount}%:</span> <span style={{ color: 'black' }}>{VNDformat(price_discount)}<span> </span></span></div>
                  <hr className="singleline" />
                  <div> <span className="product_info">{description}<span><br />
                    <span className="product_info">Nhanh tay bấm mua ngày để rinh ngay sản phẩm siêu hót siêu rẻ này thôi<span><br />
                    </span></span></span></span></div>
                  <div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="br-dashed">
                          <div className="row">
                            <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                            <div className="col-md-9 col-xs-9">
                              <div className="pr-info"> <span className="break-all">Voucher giảm 5% + Miễn phí vẫn chuyển</span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7"> </div>
                    </div>
                    <div className="row" style={{ marginTop: '15px' }}>
                      <div className="col-xs-6" style={{ marginLeft: '15px' }}> <span className="product_options">Size</span><br /> <button className="btn btn-primary btn-sm">Small</button> <button className="btn btn-primary btn-sm">Medium</button> <button className="btn btn-primary btn-sm">Big</button> </div>
                    </div>
                  </div>
                  <hr className="singleline" />
                  <div className="order_info d-flex flex-row">
                    <form action="#">
                    </form></div>
                  <div className="row">
                    <div className="col-xs-6" style={{ marginLeft: '13px' }}>
                      <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} disabled />
                        <div className="quantity_buttons">
                          <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                          <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <button className="btn btn-outline-primary mr-2" onClick={handleCartItemClick}>
                        <img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`../../components/Profile/img/cart.png`).default} alt="Cart" />Add to Cart
                      </button>
                      <button type="button" className="btn btn-danger shop-button">Buy Now</button>
                      <div className="product_fav"><i className="fas fa-heart" /></div>
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
                      <td className="col-md-4"><span className="p_specification">Sales Package :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li>2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User Guide, Warranty Documents</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4"><span className="p_specification">Model Number :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li> 14-dh0107TU </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4"><span className="p_specification">Part Number :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li>7AL87PA</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4"><span className="p_specification">Color :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Black</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4"><span className="p_specification">Suitable for :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Processing &amp; Multitasking</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4"><span className="p_specification">Processor Brand :</span> </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Intel</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
