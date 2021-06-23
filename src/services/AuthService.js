import axios from "axios";

const API_URL = "http://localhost:8080/user/";


   export const login = ({email, password}) => {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        console.log("response login" , response)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  export const logout = () => {
    localStorage.removeItem("user");
  }


