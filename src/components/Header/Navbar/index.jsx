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
      <Link to={to} className="nav-link w-auto">
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
      <ul className="navbar-nav m-auto">
        <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Điện thoại - Máy tính bảng</a>
          <a className="dropdown-item" href="#">Điện gia dụng</a>
          <a className="dropdown-item" href="#">Thời trang - Phụ kiện</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Tất cả các mục</a>
        </div>
      </li>
        {isLoggedIn ? (
          // <div className="navbar-nav">
          <>
            <CustomLink to="/profile" label={data.user.name} />
            <CustomLinkHasAction
              to="/home"
              label="Logout"
              handelClick={handelLogout}
            />
            </>
          // </div>
        ) : (
          // <div className="navbar-nav">
            <>
            <CustomLink to="/login" label="Login" />
            <CustomLink to="/register" label="Register" />
            </>
          // {/* </div> */}
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
