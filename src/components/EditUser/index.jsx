import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../../components/Header';
import "./edituser.css"

function EditUser(props) {
    const { user: data } = props;
    const {name, email, phone, address} = data.user;
    const {commune, district, city} = address;
    if (!data) {
        return <Redirect to="/home" />;
    }
    else return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card-edit h-100">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg" alt="Maxwell Admin" />
                                        </div>
                                        <h4 className="user-name">{name}</h4>
                                        <h5 className="user-email">{email}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card-edit h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" className="form-control" id="fullName" placeholder={name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" disabled id="eMail" placeholder={email} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="number" className="form-control" id="phone" placeholder={data.user.phone}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Street">District</label>
                                            <input type="name" className="form-control" id="Street" placeholder={district} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" className="form-control" id="ciTy" placeholder={city} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sTate">Commune</label>
                                            <input type="text" className="form-control" id="sTate" placeholder={commune} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary mr-3">Cancel</button>
                                            <button type="button" id="submit" name="submit" className="btn btn-danger">Update</button>
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

export default connect(mapStateToProps)(EditUser);