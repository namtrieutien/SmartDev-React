import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";

import { ArrowDownward, ArrowUpward, SupervisorAccount, PostAdd } from "@material-ui/icons";

import "./FeaturedInfor.css";
import adminApi from "../../../api/management/adminApi";
// FeaturedInfor.propTypes = {};
import { VNDformat } from "../../../helpers/utils";

function FeaturedInfor(props) {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchFeatureInfor = async () => {
      try {
        const response = await adminApi.getFeatureInfor();
        console.log("ftinfor", response);
        setData(response);
      } catch (error) {
        console.log("failed to fetch feature information: ", error);
      }
    }

    fetchFeatureInfor();
  }, [])

  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Users</span>
        <div className="featured-money-container">
          <span className="featured-money">
          {data && data.countAllUserDb}
          </span>
          <SupervisorAccount className="personadd-icon"/>
          <span className="featured-money-rate">
            +{data && data.countAllUserCounter} <ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <span className="featured-sub">
          Total users
        </span>
      </div>
      <div className="featured-item-big">
        <span className="featured-title">Transactions</span>
        <div className="featured-money-container">
          <span className="featured-money">{data && VNDformat(data.countAllTransactionDb)}</span>
          <span className="featured-money-rate">
            +{data && VNDformat(data.countAllTransactionCounter)}<ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <span className="featured-sub">
          Total transactions
        </span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Posts</span>
        <div className="featured-money-container">
          <span className="featured-money">{data && data.countAllPostDb}</span>
          <PostAdd className="postadd-icon"/>
          <span className="featured-money-rate">
            +{data && data.countAllPostCounter} <ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <span className="featured-sub">
          Total posts
        </span>
      </div>
    </div>
  );
}

export default FeaturedInfor;
