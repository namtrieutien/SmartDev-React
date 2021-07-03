import React, {useEffect} from "react";
import { widgetLgList } from "../../dummyData";
import adminApi from "../../../api/management/adminApi";
// import PropTypes from "prop-types";

import "./WidgetLg.css";

// WidgetLg.propTypes = {};


const ListProducts = (props) => {
  const listProduct = widgetLgList;

  useEffect(() => {
    const fetchLastestPost = async () => {
      try {
        const response = await adminApi.getLastestPost();
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch lastest posts', error);
      }
    }
    
    fetchLastestPost();
  })

  const Button = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>;
  };

  const listItems = listProduct.map((product) => (
    <tr className="widget-lg-tr" key={product.id}>
      <td className="widget-lg-user">
        <img
          src={product.img}
          alt="product img"
          className="widget-lg-img"
        />
        <span className="widget-lg-name">{product.name}</span>
      </td>
      <td className="widget-lg-date">{product.date}</td>
      <td className="widget-lg-amount">{product.price}</td>
      <td className="widget-lg-status">
        <Button type={product.status} />
      </td>
    </tr>
  ));
  return <>{listItems}</>;
}

function WidgetLg(props) {
  return (
    <div className="widget-lg">
      <span className="widget-lg-title">Lastest Posts</span>
      <table className="widget-lg-table">
        <tbody>
          <tr className="widget-lg-tr">
            <th className="widget-lg-th">Product</th>
            <th className="widget-lg-th">Date</th>
            <th className="widget-lg-th">Price</th>
            <th className="widget-lg-th">Status</th>
          </tr>
          <ListProducts />
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
