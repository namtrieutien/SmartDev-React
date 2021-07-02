import React from "react";
// import PropTypes from "prop-types";
import "./Footer.css";

// Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="Footer">
      <section className="footer py-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-11 m-auto  ">
              <div className="row">
                <div className="col-lg-3 py-5">
                  <h5 className="footer-h5">Get to Know Us</h5>
                  <p>Careers</p>
                  <p>Blog</p>
                  <p>About Chotot</p>
                </div>
                <div className="col-lg-3 py-5">
                  <h5 className="footer-h5">Make Money with Us</h5>
                  <p>Sell products on Chotot</p>
                  <p>Sell on Amazon Business</p>
                  <p>Sell apps on Amazon</p>
                </div>
                <div className="col-lg-3 py-5">
                  <h5 className="footer-h5">Payment Products</h5>
                  <p>Chotot Business Card</p>
                  <p>Shop with Points</p>
                  <p>Reload Your Balance</p>
                </div>
                <div className="col-lg-3 py-5">
                  <h5 className="pb-3 footer-h5">CUSTOMER CARE</h5>
                  <span>
                    <i className="fab fa-facebook fa-size"></i>
                  </span>
                  <span>
                    <i className="fab fa-instagram fa-size"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter fa-size"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus fa-size"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center">Copy right @2021 All rights reserved</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
