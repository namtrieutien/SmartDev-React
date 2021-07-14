import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";
import FeaturedInfor from "../../components/FeaturedInfor";
import Chart from "../../components/Chart";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Report from "../../components/Report";
import { loginUserAction } from '../../../redux/actions/login/authAction'


// import { dataTemp2, dataTemp } from "../../dummyData";
import adminApi from "../../../api/management/adminApi";
import "./Home.css";
Home.propTypes = {};

function Home(props) {

  const [counter, setCounter] = useState([])

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await adminApi.getCounter();
        setCounter(response);
      } catch (error) {
        console.log("failed to fetch counter: ", error);
      }
    }

    fetchCounter();
  }, [])

  const { isLoggedIn, user } = props;
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="404" />;
  } else return <Redirect to="/login" />;


  return (
    <div className="home">
      <FeaturedInfor />
      <div className="rechart">
        <div className="left-chart">
          <Chart
            className="chart-line"
            data={counter}
            title={"Chart"}
            dataKey1={'userCounter'}
            dataKey2={'postCounter'}
            dataKey3={'transactionCounter'}
            // dataKey3={dataTemp2.transactionCounter}
            // grid make grid layout
          />
        </div>
        <div className="right-report">
          <Report />
        </div>
      </div>
      <div className="home-widgets">
        <div className="left-wg">
          <WidgetSm />
        </div>
        <div className="right-wg">
          <WidgetLg />
        </div>
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
