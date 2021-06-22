import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./register.css"
import { getCities, getDistrict } from '../../redux/actions/address.action';

Register.propTypes = {

};

const SigninSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required('Password is required')
});

function Register(props) {
  const dispatch = useDispatch();
  const cities = useSelector(state => {
    return state.addressReducer.cities.slice(1)
  });


  useEffect(() => {
    dispatch(getCities())
  }, []);


  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(SigninSchema)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Login">
      <div className="container-fluid">
        <div className="row no-gutter">
          {/* <!-- The image half --> */}
          {/* <div className="col-md-6 d-none d-md-flex bg-image"></div> */}
          {/* <!-- The content half --> */}
          <div className="col-md-12 bg-light">
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
                        <input {...register("fullName")}
                          id="inputFullName"
                          // type="email" 
                          placeholder="Full name"
                          // required="" 
                          // autoFocus="" 
                          className="form-control rounded-pill border-0 shadow-sm px-4" />
                        {/* {errors.email && <p>{errors.email.message}</p>} */}
                      </div>
                      <div className="form-group mb-3">
                        <input {...register("email")}
                          id="inputEmail"
                          // type="email" 
                          placeholder="Email address"
                          // required="" 
                          // autoFocus="" 
                          className="form-control rounded-pill border-0 shadow-sm px-4" />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <div className="form-group mb-3">
                        <input  {...register("password", { required: true, maxLength: 40 })}
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>
                      <div className="form-group mb-3">
                        <select {...register("city")}
                          className="form-control rounded-pill border-0 shadow-sm"
                          onChange={(e) => {
                            if (cities.length > 0 ) {
                              let city_id = e.target.value;
                              console.log(3232);
                              dispatch(getDistrict(city_id))
                            }
                          }}
                        >
                          {cities.length > 0 && cities.map((value, index) =>
                            <option value={value.id} key={value.id} >{value.name}</option>
                          )}
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <select {...register("distinct")}
                          className="form-control rounded-pill border-0 shadow-sm">

                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <select {...register("commute")}
                          className="form-control rounded-pill border-0 shadow-sm">

                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <input {...register("email")}
                          id="inputEmail"
                          // type="email" 
                          placeholder="Email address"
                          // required="" 
                          // autoFocus="" 
                          className="form-control rounded-pill border-0 shadow-sm px-4" />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-login btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                        Sign in
                      </button>
                      <div className="text-center d-flex justify-content-between mt-4">
                        <p>Forgot your <a href="/" className="font-italic text-muted">
                          <u>password</u></a>?
                        </p>
                      </div>
                    </form>
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

export default Register;