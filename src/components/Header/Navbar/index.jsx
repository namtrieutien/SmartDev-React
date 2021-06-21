import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import "./Navbar.css"

Navbar.propTypes = {
  
};

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  // console.log(match);
  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} className="nav-link">{label}</Link>
    </li>
  );
}

function Navbar() {
  return (
    <>
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 Navbar">
        <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
        <CustomLink to="/product" label="Product" />
        <CustomLink to="/about" label="About" />
        <CustomLink to="/contact" label="Contact" />
        <CustomLink to="/login" label="Login" />
      </ul>
    </>
  );
}

export default Navbar;