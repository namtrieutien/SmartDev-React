import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';


import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import "./Dashboard.css"

import Home from '../Home';
import UsersList from '../UsersList';
import User from '../User';
import NewUser from '../NewUser';
import ProductList from '../ProductList';
import Product from '../Product';


Dashboard.propTypes = {
  
};

function Dashboard(props) {

  // console.log("props in dashboard: ", props);

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

export default Dashboard;