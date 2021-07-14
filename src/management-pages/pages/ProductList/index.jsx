import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./ProductList.css"
import adminApi from '../../../api/management/adminApi';

import { loginUserAction } from '../../../redux/actions/login/authAction'
import ProductChart from '../../components/ProductChart'


ProductList.propTypes = {

};

function ProductList(props) {

  const { isLoggedIn, user } = props;

  const [postsList, setPostsList] = useState([])

  useEffect(() => {

    if (isLoggedIn) {
      if (!user.user.roles.includes("ROLE_ADMIN"))
        return <Redirect to="/404" />;
    } else return <Redirect to="/login" />;

  }, [isLoggedIn, user])

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await adminApi.getAllPosts();
        console.log("post-list-res: ", response)
        setPostsList(response);
      } catch (error) {
        console.log('Failed to fetch users per months', error);
      }
    }
    fetchProductList();
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Product",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="product-list-user">
            <img
              className="product-list-image"
              src={params.row.image}
              alt="img"
            />
            {params.row.title}
          </div>
        );
      },
    },
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
              <p className="product-list-edit">View</p>
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


  const [data, setData] = useState([]);

  return (
    <div className="product-list">
      <ProductChart />
      <div className="product-list-table">
        <h3 className="product-lists-title">Products:</h3>
        <div style={{ height: "450px", width: "100%" }}>
          <DataGrid
            rows={postsList}
            columns={columns}
            pageSize={6}
            checkboxSelection
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
