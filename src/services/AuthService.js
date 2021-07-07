import axios from "axios";
import jwt_decode from 'jwt-decode';

const API_URL = process.env.REACT_APP_LOCAL_API_URL;

export const login = ({ email, password }) => {
  return axios
    .post(API_URL + "user/login", { email, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data;
    });
}

export const logout = () => {
  localStorage.clear();
}

export const isExpired = () => {
  var isExpired = false;
  const token = localStorage.getItem("token");
  if (token) {
    var decoded = jwt_decode(token);
    var dateNow = Date.now();
    var dateEXP = decoded.exp* 1000 ;
    if (dateEXP < dateNow) {
      isExpired = true;
    }
  }
  return isExpired;
}


