import React from "react";
import PropTypes from "prop-types";

import "./WidgetLg.css";

WidgetLg.propTypes = {};

function WidgetLg(props) {
  const Button = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>;
  };

  return (
    <div className="widget-lg">
      <span className="widget-lg-title">Lastest Transaction</span>
      <table className="widget-lg-table">
        <tbody>
          <tr className="widget-lg-tr">
            <th className="widget-lg-th">Customer</th>
            <th className="widget-lg-th">Date</th>
            <th className="widget-lg-th">Amount</th>
            <th className="widget-lg-th">Status</th>
          </tr>
          <tr className="widget-lg-tr">
            <td className="widget-lg-user">
              <img
                src="https://avatars.dicebear.com/api/bottts/1.svg"
                alt=""
                className="widget-lg-img"
              />
              <span className="widget-lg-name">Clark Kent</span>
            </td>
            <td className="widget-lg-date">2 Jun 2021</td>
            <td className="widget-lg-amount">$122.00</td>
            <td className="widget-lg-status">
              <Button type="approved" />
            </td>
          </tr>
          <tr className="widget-lg-tr">
            <td className="widget-lg-user">
              <img
                src="https://avatars.dicebear.com/api/bottts/2.svg"
                alt=""
                className="widget-lg-img"
              />
              <span className="widget-lg-name">Clark Kent</span>
            </td>
            <td className="widget-lg-date">2 Jun 2021</td>
            <td className="widget-lg-amount">$122.00</td>
            <td className="widget-lg-status">
              <Button type="declined" />
            </td>
          </tr>
          <tr className="widget-lg-tr">
            <td className="widget-lg-user">
              <img
                src="https://avatars.dicebear.com/api/bottts/3.svg"
                alt=""
                className="widget-lg-img"
              />
              <span className="widget-lg-name">Clark Kent</span>
            </td>
            <td className="widget-lg-date">2 Jun 2021</td>
            <td className="widget-lg-amount">$122.00</td>
            <td className="widget-lg-status">
              <Button type="pending" />
            </td>
          </tr>
          <tr className="widget-lg-tr">
            <td className="widget-lg-user">
              <img
                src="https://avatars.dicebear.com/api/bottts/4.svg"
                alt=""
                className="widget-lg-img"
              />
              <span className="widget-lg-name">Clark Kent</span>
            </td>
            <td className="widget-lg-date">2 Jun 2021</td>
            <td className="widget-lg-amount">$122.00</td>
            <td className="widget-lg-status">
              <Button type="approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
