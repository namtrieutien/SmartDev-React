import React from 'react';
// import PropTypes from 'prop-types';
import { NotificationsNone, Language, Settings, ExitToApp } from '@material-ui/icons'

import { logoutUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";

import "./AdminHeader.css"

// AdminHeader.propTypes = {
  
// };

function AdminHeader(props) {

  function handelLogout() {
    props.logout()
  };

  return (
    <div className="admin-topbar">
      <div className="admin-topbar-wrapper">
        <div className="top-left">
          <span className="logo">Chợ Tốt</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">
              2
            </span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">
              2
            </span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img className="top-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFh4BaZWOa9wIjURVtjwfFum5feHcWt0lN7UyMsOdmH7MKAGymN8_GBlhqJr1SHwV9cE&usqp=CAU" alt="" />
          <div className="btn topbar-icon-container ml-2" onClick={handelLogout}>
            <ExitToApp />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUserAction())
    }
  }
}
export default connect(null, mapDispatchToProps)(AdminHeader);
