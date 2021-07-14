import React, { useEffect, useState } from "react";
import { widgetLgList } from "../../dummyData";
import adminApi from "../../../api/management/adminApi";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
// import PropTypes from "prop-types";



// WidgetLg.propTypes = {};


const LoadinngPostsFrame = () => {

  const [listProduct, setListProduct] = useState([{}, {}, {}, {}]);

  const listItems = listProduct.map((product) => (
    <tr className="widget-lg-tr" key={product.index }>
      <td className="">
        <div  className="widget-lg-img"> <Skeleton circle={true} height={40} width={40} /></div>
      </td>
      <td className="">
        <span className="widget-lg-name"><Skeleton width="100px" /></span>
      </td>
      <td className="widget-lg-date"><Skeleton /></td>
      <td className="widget-lg-amount"><Skeleton /></td>
      <td className="widget-lg-amount"><Skeleton /></td>
      <td className="widget-lg-status">
        <Skeleton />
      </td>
    </tr>
  ));
  return <>{listItems}</>;
}

const ListProducts = (props) => {
  
  const {listProduct} = props;
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
    <tr className="widget-lg-tr" key={product.id }>
      <td className="">
        <img src='https://image.flaticon.com/icons/png/512/888/888870.png' alt="product img" className="widget-lg-img" />
      </td>
      <td className="">
        <span className="widget-lg-description">{product.title || <Skeleton />}</span>
      </td>
      <td className="widget-lg-date">{handleTimeStamp(product.createdAt) || <Skeleton />}</td>
      <td className="widget-lg-amount">{product.totalPrice || <Skeleton />}</td>
      <td className="widget-lg-amount">Dollar</td>
      <td className="widget-lg-status">
        {
          product.status === undefined ?
          <Skeleton /> : <Button type={product.status} />
        }
      </td>
    </tr>
  ));
  return <>{listItems}</>;
};

function TopTransactionTale(props) {
  const [loading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState([]);

  const {topPriceTransaction} = props;

  useEffect(() => {
    const fetchLastestPost = async () => {
      try {
        const response = await adminApi.getLastestPost();
        console.log(response);
        setListProduct(response);
        setLoading(true)
      } catch (error) {
        console.log("Failed to fetch lastest posts", error);
      }
    };

    fetchLastestPost();
  }, []);

  return (
    <div className="widget-lg">
      <span className="widget-lg-title">Top Transactions</span>
      <SkeletonTheme color="#e1e1f1" highlightColor="#c7c7f3" >
          <table className="widget-lg-table">
          <tbody>
            <tr className="widget-lg-tr">
              <th className="widget-lg-th">Method</th>
              <th className="widget-lg-th">Description</th>
              <th className="widget-lg-th">Date</th>
              <th className="widget-lg-th">Price</th>
              <th className="widget-lg-th">Currency</th>
              <th className="widget-lg-th">Status</th>
            </tr>
            {
              loading === true ? <ListProducts  listProduct={topPriceTransaction}/>
              : <LoadinngPostsFrame />
            }            
          </tbody>
        </table>
      </SkeletonTheme>
    </div>
  );
}

export default TopTransactionTale;