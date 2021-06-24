import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import { connect } from "react-redux";
import { logoutUserAction } from '../../../redux/actions/login/authAction'

import "./Navbar.css"

Navbar.propTypes = {

};

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} className="nav-link">{label}</Link>
    </li>
  );
}

function CustomLinkHasAction({ label, to, activeOnlyWhenExact, handelClick }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} onClick= {handelClick} className="nav-link">{label}</Link>
    </li>
  );
}

function Navbar(props) {
  const { user: data, isLoggedIn } = props;
  function handelLogout() {
    props.logout()
  };
  return (
    <>
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 Navbar">
        <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
        <CustomLink to="/product" label="Product" />
        <CustomLink to="/about" label="About" />
        <CustomLink to="/contact" label="Contact" />
        {isLoggedIn ? (
          <div className="navbar-nav mr-auto">
            <CustomLink to="/profile" label={data.user.name} />
            <CustomLinkHasAction to="/home" label="Logout" handelClick= {handelLogout}/>
          </div>
        ) : (
          <div className="navbar-nav mr-auto">
            <CustomLink to="/login" label="Login" />
            <CustomLink to="/signup" label="Sign Up" />
          </div>
        )
        }
      </ul>
    </>
  );
}
const mapStateToProps = state => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    isLoggedIn,
    user
  };
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUserAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
