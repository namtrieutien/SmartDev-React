import React, { useEffect, useState } from "react";
import { widgetLgList } from "../../dummyData";
import adminApi from "../../../api/management/adminApi";
// import PropTypes from "prop-types";

import "./WidgetLg.css";

// WidgetLg.propTypes = {};

const ListProducts = (props) => {
  // const listProduct = widgetLgList;
  const [listProduct, setListProduct] = useState(widgetLgList);
  useEffect(() => {
    const fetchLastestPost = async () => {
      try {
        const response = await adminApi.getLastestPost();
        console.log(response);
        setListProduct(response);
      } catch (error) {
        console.log("Failed to fetch lastest posts", error);
      }
    };

    fetchLastestPost();
  }, []);

  const handleTimeStamp = (timestamp) => {
    // const timestamp = Date.now(); 
    // ⏲ 
    let date = timestamp;
    date = date.split(':')[0];
    return date;
  };

  const Button = ({ type }) => {
    if (type === false)
      return <button className={"widget-lg-button selling"}>selling</button>;
    else if (type === true)
      return <button className={"widget-lg-button bought"}>bought</button>;
    else
      return <button className={"widget-lg-button recall"}>recall</button>;
  };

  const listItems = listProduct.map((product) => (
    <tr className="widget-lg-tr" key={product.id}>
      <td className="widget-lg-user">
        <img src={product.image} alt="product img" className="widget-lg-img" />
        <span className="widget-lg-name">{product.title}</span>
      </td>
      <td className="widget-lg-date">{handleTimeStamp(product.createdAt)}</td>
      <td className="widget-lg-amount">{product.price}</td>
      <td className="widget-lg-status">
        <Button type={product.status} />
      </td>
    </tr>
  ));
  return <>{listItems}</>;
};

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
