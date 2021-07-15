import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { FormGroup } from "@material-ui/core";
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
  const { data, data2, title, dataKey0, dataKey1, dataKey2, dataKey3, grid } = props;
  const [state, setState] = useState({
    year: "thisYear",
    users: true,
    posts: true,
    transactions: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state);
  };

  const handleChangeYear = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="chart">
      <h4 className="top-chart">
        <div className="chart-title">{title}</div>
          <FormControl row component="fieldset">
            <div style={{display: "flex"}}>
            <RadioGroup
              row
              aria-label="year"
              name="year"
              value={state.year}
              onChange={handleChangeYear}
            >
              <FormControlLabel
                value="thisYear"
                control={<Radio />}
                label="This year"
                labelPlacement="start"
              />
              <FormControlLabel
                value="lastYear"
                control={<Radio />}
                label="Last year"
                labelPlacement="start"
              />
            </RadioGroup>
            <FormGroup
              row
            >
              <FormControlLabel
                label="users"
                checked={state.users}
                control={<Checkbox color="primary" onChange={handleChange} />}
                name="users"
                labelPlacement="start"
              />
              <FormControlLabel
                label="transactions"
                checked={state.transactions}
                control={<Checkbox color="gray" onChange={handleChange} />}
                name="transactions"
                labelPlacement="start"
              />
              <FormControlLabel
                label="posts"
                checked={state.posts}
                control={<Checkbox color="secondary" onChange={handleChange} />}
                name="posts"
                labelPlacement="start"
              />
            </FormGroup>
            </div>           
          </FormControl>
      </h4>
      <ResponsiveContainer width="99%" height="100%" aspect={8 / 3}>
        <LineChart data={state.year === 'thisYear' ? data : data2 }>
          <XAxis dataKey={dataKey0} stroke="#5550bd" />
          {state.posts === true &&<Line type="monotone" dataKey={dataKey1} stroke="#f50057" />}
          {state.transactions === true && <Line type="monotone" dataKey={dataKey2} stroke="gray" />}
          {state.users === true && <Line type="monotone" dataKey={dataKey3} stroke="#3f51b5" />}
          <Tooltip />
          {grid && <CartesianGrid />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
