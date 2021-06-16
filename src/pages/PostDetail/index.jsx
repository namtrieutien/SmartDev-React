import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PaymentForm from '../../components/PaymentForm';

import "./PostDetail.css"

PostDetail.propTypes = {
  
};

function PostDetail(props) {
  return (
    <div className="PostDetail">
      <Header />
      {/* <!-- Page Content --> */}
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>about us</h4>
                <h2>our company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Product</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="right-image">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="assets/images/car.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/car-2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="assets/images/car-3.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>Mitsubishi Triton 2011 Tự động hai cầu</h4>
                <p>xe gia đình sử dụng bao ngon. đi xa ok máy móc êm máy lạnh mát. nội thất sạch sẽ vỏ mới. 
                  xe mua về sử dụng ngay ko phải sửa chữa gì. xe chính chủ bao ủy quyền</p>
                <h3 className="price">Price: 350.000.000đ</h3>
                {/* <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul> */}
                <PaymentForm />
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </div>
  );
}

export default PostDetail;