import React from "react";
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUserAction } from "../../../redux/actions/login/authAction";

import "./Navbar.css";

// Navbar.propTypes = {};

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
}

function CustomLinkHasAction({ label, to, activeOnlyWhenExact, handelClick }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} onClick={handelClick} className="nav-link">
        {label}
      </Link>
    </li>
  );
}

function Navbar(props) {
  const { user: data, isLoggedIn } = props;
  function handelLogout() {
    props.logout();
  }
  return (
    <>
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 Navbar">
        <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Điện thoại - Máy tính bảng</a>
          <a class="dropdown-item" href="#">Điện gia dụng</a>
          <a class="dropdown-item" href="#">Thời trang - Phụ kiện</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Tất cả các mục</a>
        </div>
      </li>
        {isLoggedIn ? (
          <div className="navbar-nav">
            <CustomLink to="/profile" label={data.user.name} />
            <CustomLinkHasAction
              to="/home"
              label="Logout"
              handelClick={handelLogout}
            />
          </div>
        ) : (
          <div className="navbar-nav">
            <CustomLink to="/login" label="Login" />
            <CustomLink to="/register" label="Sign Up" />
          </div>
        )}
      </ul>
    </>
  );
}
const mapStateToProps = (state) => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    isLoggedIn,
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutUserAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
