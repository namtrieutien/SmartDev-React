import React, {useEffect, useState} from "react";
import adminApi from "../../../api/management/adminApi";
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
  const { data, title, dataKey1, dataKey2, grid } = props;

  const [usersPerMonths, setUsersPerMonths] = useState(data)

  useEffect(() => {
    const fetchUserPerMonth = async () => {
      try {
        const response = await adminApi.getUsersPerMonths();
        console.log(response)
        setUsersPerMonths(data);
      } catch (error) {
        console.log('Failed to fetch users per months', error);
      }
    }
    fetchUserPerMonth();
  }, [])

  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey1} stroke="red" />
          <Line type="monotone" dataKey={dataKey2} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
