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


import { dataTemp2, dataTemp, dataTemp3 } from "../../dummyData";
import adminApi from "../../../api/management/adminApi";
import "./Home.css";
Home.propTypes = {};

function Home(props) {
  const [thisYear, setthisYear] = useState([]);
  const [lastYear, setLastYear] = useState([])
  const [counter, setCounter] = useState([])
  const { isLoggedIn, user } = props;
  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await adminApi.getCounter();
        setCounter(response);
        mappedChart(response);
      } catch (error) {
        console.log("failed to fetch counter: ", error);
      }
    }

    fetchCounter();
  }, [])

  
  if (isLoggedIn) {
    if (!user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="404" />;
  } else return <Redirect to="/login" />;

  const mappedChart = (chartData) => {
    let thisYearChart = [];
    let lastYearChart = [];
    thisYearChart = chartData.map((element) => {
      let temp = {
        month: element.month,
        posts: element.current_year.sum_post,
        transactions: element.current_year.sum_transaction,
        users: element.current_year.sum_user,
      }
      return temp
    })
    console.log(thisYearChart);
    setthisYear(thisYearChart);
    lastYearChart = chartData.map((element) => {
      let temp = {
        month: element.month,
        posts: element.last_year.sum_post,
        transactions: element.last_year.sum_transaction,
        users: element.last_year.sum_user,
      }
      return temp
    })
    console.log(lastYearChart);
    setLastYear(lastYearChart)
  }


  return (
    <div className="home">
      <FeaturedInfor />
      <div className="rechart">
        <div className="left-chart">
          <Chart
            className="chart-line"
            data={thisYear}
            data2={lastYear}
            dataKey0={'month'}
            title={`Chart`}
            dataKey1={'posts'}
            dataKey2={'transactions'}
            dataKey3={'users'}
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
