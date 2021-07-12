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
  const CategoryItem = ({ title, src, id }) => {
    const photo = require(`../../../images/${src}`).default;
    return (
      <Link to={{ pathname: `/category/${id}`, state: id }} className="dropdown-item" >
          <span><img className="img-responsive" width={20} height={20} src={photo} alt="" /></span> {title}
      </Link>
    )
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
            <CategoryItem title='Điện thoại - Máy tính bảng' src='smartphone.png' id={1} />
            <CategoryItem title='Điện gia dụng' src='washing-machine.png' id={2} />
            <CategoryItem title='Thời trang - Phụ kiện' src='fashion.png' id={3} />
            <CategoryItem title='Sách, VPP, Quà tặng' src='book.png' id={4} />
            <div className="dropdown-divider"></div>
            <Link to={`/product`}>
              <a className="dropdown-item" >
                <span><img className="img-responsive" width={20} height={20} src={require(`../../../images/shapes.png`).default} alt="" /></span>Tất cả các mục</a>
            </Link>
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
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
