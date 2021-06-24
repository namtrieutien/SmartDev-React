import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../../components/Header';
import "./profile.css"
function ListItem({ label, src }) {
  const photo = require(`./img/${src}`).default;
  return (
    <li className="btn btn-outline-primary list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 className="mb-0">
        <img className="feather feather-globe mr-5 icon-inline" width="40" height="40" src={photo} alt={label} />{label}</h6>
    </li>
  );
}
class Profile extends Component {

  render() {
    const { user: data } = this.props;
    if (!data) {
      return <Redirect to="/home" />;
    }

    return (
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
                        <button className="btn btn-outline-primary"><img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`./img/heart.png`).default} alt="Fav" />Favorites</button>
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
                        <small>Electronics</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Vehicles</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Pet</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>House</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Furniture</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">SALE</i>Statistics</h6>
                        <small>Electronics</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Vehicles</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Pet</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>House</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <small>Furniture</small>
                        <div className="progress mb-3" style={{ height: '5px' }}>
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                        </div>
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
}

function mapStateToProps(state) {
  const { user } = state.userReducer;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);