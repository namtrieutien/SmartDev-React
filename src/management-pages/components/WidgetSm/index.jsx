import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import Skeleton from 'react-loading-skeleton';
import adminApi from "../../../api/management/adminApi";
import "./WidgetSm.css";
import { TrainRounded, Visibility } from "@material-ui/icons";
import { widgetSmList } from "../../dummyData";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// WidgetSm.propTypes = {};
const WidgetSmList = (props) => {
  const { list } = props;

  const handleTimeStamp = (timestamp) => {
    // const timestamp = Date.now();
    // ⏲
    let date = timestamp;
    date = date.split(":")[0];
    return date;
  };

  const listUsers = list.map((user) => (
    <li key={user.id}>
      <SkeletonTheme color="#e1e1f1" highlightColor="#c7c7f3">
        <div className="widget-sm-item">
          <img
            src={
              user.avatar
                ? user.avatar
                : `https://avatars.dicebear.com/api/micah/${user.name}.svg`
            }
            alt="user img"
            className="widget-sm-img"
            width="400"
          />
          <div
            color="#e1e1f1"
            highlightColor="#c7c7f3"
            className="widget-sm-user"
          >
            <span className="widget-sm-username">
              {user.name || <Skeleton />}
            </span>
            <span className="widget-sm-user-title">
              {handleTimeStamp(user.address.createdAt) || <Skeleton />}
            </span>
          </div>

          <Link
            className="link-wrapper-widget-sm"
            to={`/management/users/${user.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className="widget-sm-button">
              <Visibility className="widget-sm-icon" />
              Display
            </button>
          </Link>
        </div>
      </SkeletonTheme>
    </li>
  ));

  return <ul className="widget-sm-list">{listUsers}</ul>;
};

const LoadingFrame = (props) => {
  const list = [{}, {}, {}, {}];

  const listUsers = list.map((user) => (
    <li key={user.index}>
      <SkeletonTheme color="#e1e1f1" highlightColor="c7c7f3">
        <div className="widget-sm-item">
          <div className="widget-sm-img">
            {
              <SkeletonTheme color="#e1e1f1" highlightColor="#c7c7f3">
                <Skeleton circle={true} height={40} width={40} />
              </SkeletonTheme>
            }
          </div>
          <div
            color="#e1e1f1"
            highlightColor="#c7c7f3"
            className="widget-sm-user"
          >
            <span className="widget-sm-username">
              {<Skeleton width="150px" />}
            </span>
            <span className="widget-sm-user-title">{<Skeleton />}</span>
          </div>

          <div
            className="link-wrapper-widget-sm"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className="widget-sm-button">
              <Visibility className="widget-sm-icon" />
              Display
            </button>
          </div>
        </div>
      </SkeletonTheme>
    </li>
  ));

  return <ul className="widget-sm-list">{listUsers}</ul>;
};

function WidgetSm(props) {
  // const list = widgetSmList;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLastestPost = async () => {
      try {
        const response = await adminApi.getFiveNewestUsers();
        console.log(response);
        setList(response);
        setLoading(true);
        console.log("list: ", list);
      } catch (error) {
        console.log("Failed to fetch newest users", error);
      }
    };

    fetchLastestPost();
  }, []);

  return (
    <div className="widget-sm">
      <span className="widget-sm-title">New Join Members</span>
      {loading === true ? <WidgetSmList list={list} /> : <LoadingFrame />}
    </div>
  );
}

export default WidgetSm;
