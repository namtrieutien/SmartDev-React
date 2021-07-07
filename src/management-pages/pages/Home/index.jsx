import React from "react";
// import PropTypes from "prop-types";

import "./Home.css";

import FeaturedInfor from "../../components/FeaturedInfor";
import Chart from "../../components/Chart";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import Piechart from "../../components/Piechart";
import { dataTemp, pieData01, pieData02 } from "../../dummyData";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

Home.propTypes = {};

function Home(props) {
  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="404" />;
  } else return <Redirect to="/login" />;

  return (
    <div className="home">
      <FeaturedInfor />
      <div className="rechart">
        <Chart
          className="chart-line"
          data={dataTemp}
          title={"User Analystics"}
          dataKey1={dataTemp.thisYearUser}
          dataKey2={dataTemp.lastYearUser}
          // grid make grid layout
        />
        <Piechart
          className="chart-pie"
          title="Top Categories"
          data01={pieData01}
          data02={pieData02}
        />
      </div>
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
