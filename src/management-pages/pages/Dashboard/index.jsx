import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route, } from 'react-router-dom';


import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import "./Dashboard.css"

import Home from '../Home';
import UsersList from '../UsersList';
import User from '../User';
import NewUser from '../NewUser';
import ProductList from '../ProductList';
import Product from '../Product';

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

Dashboard.propTypes = {

};

function Dashboard(props) {
  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="404" />;
  } else return <Redirect to="/login" />;

  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar />
        <Switch>
          <Route exact path={props.match.path} component={Home}></Route>
          <Route exact path={`${props.match.path}/users`} component={UsersList}></Route>
          <Route exact path={`${props.match.path}/users/create`} component={NewUser}></Route>
          <Route exact path={`${props.match.path}/users/:userId`} component={User}></Route>
          <Route exact path={`${props.match.path}/product/`} component={ProductList}></Route>
          <Route exact path={`${props.match.path}/product/:productId`} component={Product}></Route>
        </Switch>
      </div>
    </div>
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
    login: (email, password) => {
      dispatch(loginUserAction(email, password))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
