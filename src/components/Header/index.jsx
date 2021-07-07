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
      {/* <!-- Header --> */}
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-grad">
          <div className="container reponsive-header">
            <a className="navbar-brand" href="/">
              <h2>
                Chợ <em>Tốt</em>
              </h2>
            </a>
            <button
              className="navbar-toggler reponsive-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <Navbar />
            </div>
            <CartBadge className=""/>
            <div className="search-posts">
              <SearchPosts />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
