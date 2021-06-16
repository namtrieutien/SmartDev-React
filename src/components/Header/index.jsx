import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css"
import Navbar from './Navbar';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <div className="Header">
      {/* <!-- Header --> */}
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/"><h2>Chợ <em>Tốt</em></h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              {/* <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li> 
                <li className="nav-item">
                  <a className="nav-link" href="products.html">Our Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul> */}
              <Navbar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;