import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch, connect } from "react-redux";
import Header from '../../components/Header';
import { getCities, getDistrict, getCommute } from '../../redux/actions/address.action';
import { useForm } from 'react-hook-form'
import { edit } from '../../redux/actions/user/edit.action'
import { Link } from "react-router-dom"
import "./edituser.css"

import loading from '../Register/login-image/loading.gif'

function EditUser(props) {
    const { user: data, checkStatus, checkSuccessful } = props;
    const { name, email, phone, address, avatar } = data.user;
    const { commune, district, city } = address;

    const [checkUpdate, setCheckUpdate] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [check, setCheck] = useState({
        checkCity: false,
        checkDistrict: false,
        checkCommute: false
    });

    const dispatch = useDispatch();
    const cities = useSelector(state => {
        return state.addressReducer.cities.slice(1)
    });

    const districts = useSelector(state => {
        return state.addressReducer.districts;
    });

    const commutes = useSelector(state => {
        return state.addressReducer.commutes;
    });
    const findByName = (array, name) => {
        return array.find(element => element.name === name).id;
    }

    useEffect(() => {
        dispatch(getCities())
    }, []);

    const onSubmit = (data) => {
        console.log("submit", data)
        dispatch(edit(data));
    };

    if (!data) {
        return <Redirect to="/home" />;
    }
    else return (
        <div>
            <Header />
            <div className={checkStatus ? "loading-bg" : "loading-bg d-none"}>
              <img src={loading} alt="Loading..." />
            </div>
            <div className="container mt-5">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-5 pb-3">
                        <div className="card-edit h-100">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src={avatar ? avatar : "https://avatars.dicebear.com/api/bottts/sad.svg"} alt="Maxwell Admin" />
                                        </div>
                                        <h4 className="user-name">{name}</h4>
                                        <h5 className="user-email">{email}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                            <div className="card-edit h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-2 text-primary">Personal Details</h6>
                                            {/* {checkSuccessful && <h6 className="badge badge-success" >Update successful</h6>} */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input {...register("name")} type="text" className="form-control" id="fullName" defaultValue={name} required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="eMail">Email</label>
                                                <input {...register("email")} type="email" className="form-control" id="eMail" value={email} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                {errors.phone && <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                    {errors.phone.message}
                                                </p>}
                                                <input {...register("phone")} type="number" className="form-control" id="phone" required defaultValue={phone} />
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
                                                <select {...register("district")}
                                                    className="form-control rounded-pill border-0 shadow-sm px-4"
                                                    onChange={(e) => {
                                                        if (districts.length > 0) {
                                                            let district_id = findByName(districts, e.target.value)
                                                            setCheck({ ...check, checkDistrict: true })
                                                            dispatch(getCommute(district_id))
                                                        }
                                                    }}
                                                >
                                                    {!check.checkDistrict && <option>{district}</option>}
                                                    {districts.length > 0 && districts.map((value, index) =>
                                                        <option value={value.name} key={value.id}>{value.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label htmlFor="ciTy">City</label>
                                                {/* <input type="name" className="form-control" id="ciTy" defaultValue={city} /> */}
                                                <div className="form-group mb-3">
                                                    <select {...register("city")}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        onChange={(e) => {
                                                            if (cities.length > 0) {
                                                                let city_id = findByName(cities, e.target.value)
                                                                setCheck({ ...check, checkCity: true })
                                                                dispatch(getDistrict(city_id))
                                                            }
                                                        }} required
                                                    >
                                                        {!check.checkCity && <option>{city}</option>}
                                                        {cities.length > 0 && cities.map((value, index) =>
                                                            <option value={value.name} key={value.id}>{value.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label htmlFor="sTate">Commune</label>
                                                {/* <input type="text" className="form-control" id="sTate" defaultValue={commune} /> */}
                                                <div className="form-group mb-3">
                                                    <select {...register("commute")}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        onChange={(e) => {
                                                            if (commutes.length > 0) {
                                                                setCheck({ ...check, checkCommute: true })
                                                            }
                                                        }}
                                                        required
                                                    >
                                                        {!check.checkCommute && <option>{commune}</option>}
                                                        {commutes.length > 0 && commutes.map((value, index) =>
                                                            <option value={value.name} key={value.id}>{value.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text-right">
                                                <Link to="/profile" className="btn btn-secondary mr-3">Cancel</Link>
                                                <button type="submit" onClick={() => setCheckUpdate(true)} id="submit" name="submit" className="btn btn-danger">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );

}

function mapStateToProps(state) {
    const { user } = state.userReducer;
    const {checkStatus, checkSuccessful} = state.editUserReducer
    return {
        user,
        checkStatus,
        checkSuccessful
    };
}

export default connect(mapStateToProps)(EditUser);