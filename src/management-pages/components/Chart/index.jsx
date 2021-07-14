import React, {useEffect, useState} from "react";

// import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Chart.css";

// Chart.propTypes = {};

function Chart(props) {
  const { data, title, dataKey1, dataKey2, dataKey3, grid } = props;


  return (
    <div className="chart">
      <h4 className="chart-title">{title}</h4>
      <ResponsiveContainer width="99%" height="100%" aspect={8 / 3}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey1} stroke="red" />
          <Line type="monotone" dataKey={dataKey2} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey3} stroke="gray" />
          <Tooltip />
          {grid && <CartesianGrid />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
