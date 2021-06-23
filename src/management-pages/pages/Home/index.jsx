import React from "react";
import PropTypes from "prop-types";

import "./Home.css";
import FeaturedInfor from "../../components/FeaturedInfor";
import Chart from "../../components/Chart";
import WidgetSm from "../../components/WidgetSm";
import WidgetLg from "../../components/WidgetLg";

import { dataTemp } from "../../dummyData";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <FeaturedInfor />
      <Chart
        data={dataTemp}
        title={"User Analystics"}
        dataKey1={"Active User"}
        dataKey2={"pv"}
        // grid
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
