import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import "./UsersList.css";
import { Link } from "react-router-dom";
import adminApi from "../../../api/management/adminApi";

import { loginUserAction } from '../../../redux/actions/login/authAction'

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

UsersList.propTypes = {};


function UsersList(props) {
  const { isLoggedIn, user } = props;
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    if (isLoggedIn) {
      if (!user.user.roles.includes("ROLE_ADMIN"))
        return <Redirect to="/404" />;
    } else return <Redirect to="/login" />;
  }, [isLoggedIn, user])

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await adminApi.getAllUsers();
        console.log("user-list-res: ", response)
        setUsersList(response);
      } catch (error) {
        console.log('Failed to fetch users per months', error);
      }
    }
    fetchUserList();
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "User Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userslist-user">
            <img
              className="userslist-image"
              src={params.row.avatar ? params.row.avatar : `https://avatars.dicebear.com/api/micah/${params.row.name}.svg`}
              alt="avatar"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 220 },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/management/users/${params.row.id}`}>
              <p className="userslist-edit">Edit</p>
            </Link>
            <DeleteOutline
              className="userslist-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = async (id) => {
    setUsersList(usersList.filter((item) => item.id !== id));
    try {
      // console.log("handle delete", postId);
      let requestBody = {
        userId: id,
      };
      const response = await adminApi.deleteUser(requestBody);
      // console.log(response);
      if (response.status == 200) {
        setUsersList(usersList.filter((item) => item.id !== id));
      }
      
    } catch (error) {
      console.log("Failed to delete post :", error);
    }
  };

  return (
    <div className="userslist">
      <div className="userslist-table">
        <h3 className="product-chart-title">List Users</h3>
        <div style={{ height: "450px", width: "auto" }} className="userlist-data-table">
          <DataGrid
            rows={usersList}
            columns={columns}
            pageSize={6}
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    isLoggedIn,
    user
  };
}
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(loginUserAction(email, password))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
