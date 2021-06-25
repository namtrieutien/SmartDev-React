import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./ProductList.css"
import adminApi from '../../../api/management/adminApi';


ProductList.propTypes = {
  
};

const rows = [
  {
    id: 1,
    name: "Apple",
    img: "https://source.unsplash.com/random",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple",
    img: "https://source.unsplash.com/random",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple",
    img: "https://source.unsplash.com/random/1",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple",
    img: "https://source.unsplash.com/random/2",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple",
    img: "https://source.unsplash.com/random/3",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple",
    img: "https://source.unsplash.com/random/4",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple",
    img: "https://source.unsplash.com/random/5",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple",
    img: "https://source.unsplash.com/random/6",
    stock: "123",
    status: "active",
    price: "$120.00",
  },
];

function ProductList(props) {

  // const [usersList, setUsersList] = useState()

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await adminApi.getAllPosts();
        console.log(response);
      } catch (error) {
        console.log("failed to fetch list users", error);
      }
    }
    fetchUserList();
  }, [])
    
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="product-list-user">
            <img
              className="product-list-image"
              src={params.row.img}
              alt="img"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 220 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/management/product/${params.row.id}`}>
              <button className="product-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="product-list-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  
  const [data, setData] = useState(rows);

  return (
    <div className="product-list">
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

export default ProductList;