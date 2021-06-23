import React from "react";
import PropTypes from "prop-types";

import FeaturedInfor from "../../components/FeaturedInfor";
import Chart from "../../components/Chart";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";
import Piechart from "../../components/Piechart";

import "./Home.css";

import { dataTemp, pieData01, pieData02 } from "../../dummyData";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <FeaturedInfor />
      <div className="rechart">
        <Chart
          className="chart-line"
          data={dataTemp}
          title={"User Analystics"}
          dataKey1={"Active User"}
          dataKey2={"pv"}
          // grid
        />
        <Piechart
          className="chart-pie"
          title="Top Product"
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

export default Home;
