import React, {useState, useEffect} from "react";
import { Mood, MoodBad } from "@material-ui/icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./ProductChart.css"

const data = [
  {
    day: 'Day 1',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 2',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 3',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
  {
    day: 'Day 4',
    "This Month Posts": 2780,
    "Last Month Posts": 3908,
    base: 2100,
  },
  {
    day: 'Day 5',
    "This Month Posts": 1890,
    "Last Month Posts": 4800,
    base: 2100,
  },
  {
    day: 'Day 6',
    "This Month Posts": 2390,
    "Last Month Posts": 3800,
    base: 2100,
  },
  {
    day: 'Day 7',
    "This Month Posts": 3490,
    "Last Month Posts": 4300,
    base: 2100,
  },
  {
    day: 'Day 8',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 9',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 10',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
  {
    day: 'Day 11',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 12',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 13',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
  {
    day: 'Day 14',
    "This Month Posts": 2780,
    "Last Month Posts": 3908,
    base: 2100,
  },
  {
    day: 'Day 15',
    "This Month Posts": 1890,
    "Last Month Posts": 4800,
    base: 2100,
  },
  {
    day: 'Day 16',
    "This Month Posts": 2390,
    "Last Month Posts": 3800,
    base: 2100,
  },
  {
    day: 'Day 17',
    "This Month Posts": 3490,
    "Last Month Posts": 4300,
    base: 2100,
  },
  {
    day: 'Day 18',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 19',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 20',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
  {
    day: 'Day 21',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 22',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 23',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
  {
    day: 'Day 24',
    "This Month Posts": 2780,
    "Last Month Posts": 3908,
    base: 2100,
  },
  {
    day: 'Day 25',
    "This Month Posts": 1890,
    "Last Month Posts": 4800,
    base: 2100,
  },
  {
    day: 'Day 26',
    "This Month Posts": 2390,
    "Last Month Posts": 3800,
    base: 2100,
  },
  {
    day: 'Day 27',
    "This Month Posts": 3490,
    "Last Month Posts": 4300,
    base: 2100,
  },
  {
    day: 'Day 28',
    "This Month Posts": 4000,
    "Last Month Posts": 2400,
    base: 2100,
  },
  {
    day: 'Day 29',
    "This Month Posts": 3000,
    "Last Month Posts": 1398,
    base: 2100,
  },
  {
    day: 'Day 30',
    "This Month Posts": 2000,
    "Last Month Posts": 9800,
    base: 2100,
  },
];


export default function ProductChart(props) {
  return (
    <div className="product-chart">
      <h3 className="product-chart-title">Posts Per Months</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="This Month Posts" stroke="red"  />
          <Line type="monotone" dataKey="Last Month Posts" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}