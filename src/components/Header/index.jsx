import React from "react";
// import PropTypes from "prop-types";
import "./Header.css";
import Navbar from "./Navbar";
import SearchPosts from "../../components/SearchPosts";
import CartBadge from "../Cart/CartBadge";

// Header.propTypes = {};

function Header(props) {
  return (
    <div className="Header">
      <header className="ftco-section">
        <div className="fixed-top">
          <div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
						<div className="col">
							<p className="mb-0 phone"><span className="fa fa-phone"></span> <a href="#">+848 98 213 745</a></p>
						</div>
						<div className="col d-flex justify-content-end">
							<div className="social-media">
				    		<p className="mb-0 d-flex">
				    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-facebook"><i className="sr-only">Facebook</i></span></a>
				    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-twitter"><i className="sr-only">Twitter</i></span></a>
				    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-instagram"><i className="sr-only">Instagram</i></span></a>
				    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
				    		</p>
			        </div>
						</div>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg bg-light ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    	<a className="navbar-brand" href="/">Chợ Tốt <span>Chợ người Việt</span></a>
				<CartBadge />
        <SearchPosts />
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <Navbar />
	      </div>
	    </div>
	  </nav>
        </div>
		
    </header>
    </div>
  );
}

export default Header;
