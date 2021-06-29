import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../../components/Header';
import "./profile.css"
import userApi from '../../api/management/userApi';

function ListItem({ label, src }) {
  const photo = require(`./img/${src}`).default;
  return (
    <li className="btn btn-outline-primary list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 className="mb-0">
        <img className="feather feather-globe mr-5 icon-inline" width="40" height="40" src={photo} alt={label} />{label}</h6>
    </li>
  );
}
function ProgressBar({ label, width, aria_valuenow }) {
  const styleObject = { "width": width }
  return (
    <div>
      <small>{label}</small>
      <div className="progress mb-3" style={{ height: '5px' }}>
        <div className="progress-bar bg-primary" role="progressbar" style={styleObject} aria-valuenow={{ aria_valuenow }} aria-valuemin={0} aria-valuemax={100} />
      </div>
    </div>
  );
}

function Profile(props) {
  const [total, setTotal_all_orders] = useState();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStatistic = async () => {
    try {
      setIsLoading(true);
      const response = await userApi.statisticByPrice();
      setTotal_all_orders(response[0]);
      setList(response.slice(1, response.length));
      setIsLoading(false);
    } catch (error) {
      console.log("failed to fetch list users", error);
    }
  }

  useEffect(() => {
    fetchStatistic();

  }, [])
  const { user: data } = props;

  if (!data) {
    return <Redirect to="/home" />;
  }
  else return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="main-body ">
          <div className="row gutters-sm ">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4>{data.user.name}</h4>
                      <p className="text-secondary mb-1">Premium Member</p>
                      <button className="btn btn-outline-primary mr-2"><img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`./img/cart.png`).default} alt="Cart" />Cart</button>
                      <button className="btn btn-outline-primary"><img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`./img/heart.png`).default} alt="Fav" />Create Post</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <ListItem label="Profile" src='user.png'></ListItem>
                  <ListItem label="History" src='bill.png'></ListItem>
                  <ListItem label="Notification" src='megaphone.png'></ListItem>
                  <ListItem label="Voucher" src='voucher.png'></ListItem>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Fullname</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.user.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.user.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.user.phone}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.user.address.commune}, {data.user.address.district},{data.user.address.city}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">BUY</i>Statistics</h6>
                      {isLoading ? (
                        <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
                      ) : (
                        <div>
                          <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">{total.total_all_orders}</i>VND</h7>
                          {list.map(item => (
                            <ProgressBar label={item.category} width={`${item.percentage}%`} aria_valuenow={item.percentage} ></ProgressBar>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">SALE</i>Statistics</h6>
                      <ProgressBar label="Electronics" width='30%' aria_valuenow={30} ></ProgressBar>
                      <ProgressBar label="Vehicles" width='55%' aria_valuenow={55} ></ProgressBar>
                      <ProgressBar label="Pet" width='15%' aria_valuenow={15} ></ProgressBar>
                      <ProgressBar label="House" width='5%' aria_valuenow={6} ></ProgressBar>
                      <ProgressBar label="Furniture" width='70%' aria_valuenow={70} ></ProgressBar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

function mapStateToProps(state) {
  const { user } = state.userReducer;
  return {
    user
  };
}

export default connect(mapStateToProps)(Profile);