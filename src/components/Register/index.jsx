import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./registerStyle.css"
import { getCities, getDistrict, getCommute } from '../../redux/actions/address.action';
import { register as userRegister } from '../../redux/actions/user/register.action';

import userEvent from '@testing-library/user-event';

import loading from './login-image/loading.gif';

Register.propTypes = {

};


const SigninSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required('Password is required'),
  phone: yup.string().required('Phone is required')
});

function Register(props) {

  const [checkRegister, setCheckRegister] = useState(false)

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

  const responseData = useSelector(state => {
    return state.registerReducer.data;
  });

  const checkTemp = useSelector(state => {
    return state.registerReducer.check;
  });
  
  // let user = useSelector(state => {
  //   return state;
  // });

  useEffect(() => {
    dispatch(getCities())
  }, []);

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(SigninSchema)
  });

  const onSubmit = (data) => {
    dispatch(userRegister(data));
  };

  const findByName = (array, name) => {
    return array.find(element => element.name === name).id;
  }
  

  const array = [200, 400, 500];
  return (
    <div>
      <div className={checkTemp ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..."/>
      </div>
      <div className="Login">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* <!-- The image half --> */}
            <div className="col-md-5 d-none d-md-flex bg-image"></div>
            {/* <!-- The content half --> */}
            <div className="col-md-7 bg-light">
              <div className="login d-flex align-items-center py-5">
                {/* <!-- Demo content--> */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Welcome to Chotot</h3>
                      <p className="text-muted mb-4">
                        Not a member yet?
                        <a className="register-anchor ml-1" href="/login">Login now</a>
                      </p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                          <input {...register("name")}
                            id="inputname"
                            // type="email" 
                            placeholder="Full name"
                            // required="" 
                            // autoFocus="" 
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>
                        <div className="form-group mb-3">
                          <input {...register("email")}
                            id="inputEmail"
                            type="text"
                            placeholder="Email address"
                            // required=""
                            // autoFocus="" 
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                          {errors.email && <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                            {errors.email.message === "email must be a valid email" ? "Email must be a valid email" : errors.email.message}
                          </p>}
                          {responseData && responseData.httpStatus !== 200 && <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                            {responseData && responseData.httpStatus && <span>{responseData.email.message}!</span>}
                          </p>}
                        </div>
                        <div className="form-group mb-3">
                          <input  {...register("password", { required: true, maxLength: 40 })}
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                          {errors.password && <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                            {errors.password.message}
                          </p>}
                        </div>
                        <div className="form-group mb-3">
                          <input {...register("phone")}
                            id="inputPhone"
                            placeholder="Phone"
                            required
                            // autoFocus="" 
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                          {errors.phone && <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                            {errors.phone.message}
                          </p>}
                        </div>
                        <div className="form-group mb-3">
                          <select {...register("city")}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            onChange={(e) => {
                              if (cities.length > 0) {
                                let city_id = findByName(cities, e.target.value)
                                setCheck({ ...check, checkCity: true })
                                dispatch(getDistrict(city_id))
                              }
                            }}
                          // required
                          >
                            {!check.checkCity && <option>&#8594;Select city&#8592;</option>}
                            {cities.length > 0 && cities.map((value, index) =>
                              <option value={value.name} key={value.id}>{value.name}</option>
                            )}
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <select {...register("district")}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            onChange={(e) => {
                              if (districts.length > 0) {
                                let district_id = findByName(districts, e.target.value)
                                setCheck({ ...check, checkDistrict: true })
                                dispatch(getCommute(district_id))
                              }
                            }}
                          // required
                          >
                            {!check.checkDistrict && <option>&#8594;Select district&#8592;</option>}
                            {districts.length > 0 && districts.map((value, index) =>
                              <option value={value.name} key={value.id}>{value.name}</option>
                            )}
                          </select>
                        </div>
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
                            {!check.checkCommute && <option>&#8594;Select commute&#8592;</option>}
                            {commutes.length > 0 && commutes.map((value, index) =>
                              <option value={value.name} key={value.id}>{value.name}</option>
                            )}
                          </select>
                        </div>
                        <button
                          type="submit"
                          onClick={() => setCheckRegister(true)}
                          className="btn btn-login btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                          Sign up
                        </button>
                        {/* <div className="text-center d-flex justify-content-between mt-4">
                        <p>Forgot your <a href="/" className="font-italic text-muted">
                          <u>password</u></a>?
                        </p>
                      </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal notification */}
        <div className={responseData && responseData.httpStatus === 200 ? "modal d-block " : "modal modal-notification"} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Notification</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="" style={{ fontSize: "20px" }}>
                  <i className="far fa-envelope mr-2" style={{ fontSize: '22px' }}></i>
                  Register successfull. Check your email to activate your account
                </p>
              </div>
              <div className="modal-footer">
                <a href="/login">
                <button type="button" className="btn btn-login text-uppercase rounded-pill shadow-sm">
                  Go to login
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;