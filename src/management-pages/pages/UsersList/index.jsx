import React, { useState } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import "./UsersList.css";
import { Link } from "react-router-dom";

UsersList.propTypes = {};

const rows = [
  {
    id: 1,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
    email: "butcherofblaviken@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    username: "Geralt",
    avatar: "https://source.unsplash.com/random",
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
              <button className="userslist-edit">Edit</button>
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
