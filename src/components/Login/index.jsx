import React, {useState} from "react";
// import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUserAction } from "../../redux/actions/login/authAction";
import { resendActivationLink } from '../../redux/actions/user/register.action'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Login.css";
import loading from '../Register/login-image/loading.gif'
// Login.propTypes = {};

const SigninSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("Password is required"),
});

function Login(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });
  const { isLoggedIn, user, check, error, checkAuth, checkMail, checkSent } = props;

  const [email, setEmail] = useState('')

  if (isLoggedIn) {
    if (user.user.roles.includes("ROLE_ADMIN"))
      return <Redirect to="/management" />;
    else return <Redirect to="/profile" />;
  }

  const onSubmit = (data) => {
    setEmail(data.email);
    props.login(data.email, data.password);
  };

  const clickResendActivationLink = () => {
    props.resend(email)
  }

  return (
    <div>
      <div className={check || checkMail ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <div className="Login">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* <!-- The image half --> */}
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
            {/* <!-- The content half --> */}
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                {/* <!-- Demo content--> */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Welcome to Chotot</h3>
                      <p className="text-muted mb-4">
                        Not a member yet?
                        <a className="register-anchor ml-2" href="/register">
                          Register now
                        </a>
                      </p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                          {error && <p className='badge badge-danger mb-2 ml-1'>
                            <span>Email or password is wrong!</span>
                          </p>}
                          {!checkAuth && !error &&
                            <div className='mb-2 ml-1'>
                              <p><span className="text-danger">You need to active your email.</span></p>
                              <p><span>Click <a href="#" style={{ color: 'blue' }} onClick={() => clickResendActivationLink()}>here</a> to resend the activation link.</span></p>
                            </div>
                            }
                            {checkSent && <div className='mb-2 ml-1'>
                              <p><span className="badge badge-success">Email has sent to your mailbox.</span></p>
                            </div>}
                          <input
                            {...register("email")}
                            id="inputEmail"
                            // type="email"
                            placeholder="Email address"
                            // required=""
                            // autoFocus=""
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                          {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="form-group mb-3">
                          <input
                            {...register("password", {
                              required: true,
                              maxLength: 40,
                            })}
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                          {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            {...register("remember-me")}
                            id="customCheck1"
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <label
                            htmlFor="customCheck1"
                            className="custom-control-label remember-me"
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-login btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                        <div className="text-center d-flex justify-content-between mt-4">
                          <p>
                            Forgot your{" "}
                            <a href="/" className="font-italic text-muted">
                              <u>password</u>
                            </a>
                            ?
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
    </div>
  );
}
const mapStateToProps = state => {
  const { isLoggedIn, user, check, error, checkAuth } = state.userReducer;
  const { checkMail, checkSent } = state.registerReducer;

  return {
    isLoggedIn,
    user,
    check,
    error,
    checkAuth,
    checkMail,
    checkSent
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(loginUserAction(email, password));
    },
    resend: (email) => {
      dispatch(resendActivationLink(email));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
