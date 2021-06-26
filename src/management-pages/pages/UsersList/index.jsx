import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import "./UsersList.css";
import { Link } from "react-router-dom";
import adminApi from "../../../api/management/adminApi";

UsersList.propTypes = {};

const rows = [
  {
    id: 1,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/a.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/b.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/c.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/d.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/d.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/e.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/f.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    username: "Geralt",
    avatar: "https://avatars.dicebear.com/api/avataaars/h.svg",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
];

function UsersList(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userslist-user">
            <img
              className="userslist-image"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 220 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
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

  const [data, setData] = useState(rows);
  // const [usersList, setUsersList] = useState()

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await adminApi.getAllUsers();
        console.log(response);
      } catch (error) {
        console.log("failed to fetch list users", error);
      }
    }

    fetchUserList();
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="userslist">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default UsersList;
