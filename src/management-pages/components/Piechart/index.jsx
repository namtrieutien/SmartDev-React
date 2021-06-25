import React from "react";
// import PropTypes from "prop-types";

import "./Piechart.css";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

Piechart.propTypes = {};

function Piechart(props) {
  const { data01, data02, title } = props;

  return (
    <div className="pie-chart">
      <h3 className="chart-pie-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={10 / 10}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
