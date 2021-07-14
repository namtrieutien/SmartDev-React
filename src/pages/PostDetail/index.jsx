import React, { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux'
import * as yup from "yup";

import "./PostDetail.css"
import { VNDformat } from '../../helpers/utils'
import { addNewToCart, AddToCartAPI } from '../../redux/actions/cartAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import loading from '../../components/Register/login-image/loading.gif';
import { getPostById } from '../../api/posts/search';

import { getReportTypes, report, resetStatus } from '../../redux/actions/posts/search.action'

const ReportSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
  type: yup.string().required('Type is required'),
});

const mapStateToProps = (state) => {
  const { isLoggedIn, user } = state.userReducer;
  return {
    cartList: state.cartReducer.list,
    isLoggedIn,
    user: user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAPI: (pid) => {
      dispatch(AddToCartAPI(pid));
    },
    addNewToCart: (item) => {
      dispatch(addNewToCart(item));
    },
  };
}

function PostDetail(props) {
  const { post_id } = useParams();
  const location = useLocation();
  const [isLoading, setLoading] = useState(false)

  const [post, setPost] = useState({})
  const [owner, setOwner] = useState({})
  const [address, setAddress] = useState({})
  const [buyer, setBuyer] = useState({})


  const { cartList, isLoggedIn, user } = props

  const [status, setStatus] = useState("Add to Cart");

  useEffect(() => {
    const setState = (response) => {
      setPost(response)
      setOwner(response.user)
      setAddress(response.user.address)
      setBuyer(response.buyer)
      checkCartItem(response)
      setLoading(false);
    }
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await getPostById(post_id)
        setState(response)
      } catch (error) {
        console.log("Failed to fetch post :", error);
      }
    }
    const checkCartItem = (post) => {
      const newItem = cartList.find(cartItem => JSON.stringify(cartItem) === JSON.stringify(post))
      if (JSON.stringify(newItem) === JSON.stringify(post)) {
        setStatus("Added");
      } else {
        setStatus("Add to Cart")
      }
    }

    if (location.state) {
      const post = location.state.post
      setState(post)
    }
    else if (post_id) {
      fetchPost();
    }

  }, [cartList, post_id])

  const handleCartItemClick = () => {
    props.addNewToCart(post);
    if (isLoggedIn) props.addToCartAPI(post.id)
  };

  //report
  const dispatch = useDispatch();

  const reportTypes = useSelector(state => {
    return state.searchPostReducer.reportTypes;
  });

  const checkPostReport = useSelector(state => {
    return state.searchPostReducer.checkPostReport;
  });

  const reportData = useSelector(state => {
    return state.searchPostReducer.report;
  });

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuth(true)
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    dispatch(getReportTypes())
  }, [])

  const clickClose = () => {
    dispatch(resetStatus())
    reset('', {
      keepValues: false,
      keepErrors: false,
    })
  }

  const checkAuth = () => {
    if (!auth) {
      window.open('/login', '_self');
    }
  }

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(ReportSchema)
  });

  const onSubmit = (data, e) => {
    dispatch(report({ ...data, postId: window.location.pathname.split('/post/')[1] }));
    reset('', {
      keepValues: false,
      keepErrors: false,
    })
  };
  let class_loading = isLoading ? "loading-bg" : "loading-bg d-none"
  return (
    <div className="PostDetail">
      <div className={checkPostReport ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <Header />
      {isLoading === true ? (
        <div className={class_loading} >
          <img src={loading} alt="Loading..." />
        </div>) : (
        <div className="super_container">
          <div className="single_product">
            <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '11px' }}>
              <div className="row">
                <div className="col-lg-4 order-lg-2 order-1 ml-3">
                  <div className="image_selected"><img src={post.image} alt="post_img" /></div>
                </div>
                <div className="col-lg-6 order-3 ml-3">
                  <div className="product_description mt-3">
                    <nav>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Home</li>
                        <li className="breadcrumb-item active">Products</li>
                        <li className="breadcrumb-item active">{post.category}</li>
                      </ol>
                    </nav>
                    <div className="product_name">{post.title}</div>
                    <div >
                      <span className="product_price text-danger col-sm-8"> {VNDformat(post.price)}</span>
                      {post.status && post.status === true ?
                        (<span className="product_price col-sm-4">
                          <img className="" style={{ width: '30%', height: '50%' }} src="https://image.flaticon.com/icons/png/512/3578/3578169.png" alt="" />
                        </span>) : (<div />)
                      }

                    </div>

                    <hr className="singleline" />
                    <div>
                      <span className="product_info">{post.description}<span><br />
                      </span></span>
                    </div>
                    {/* Buyer */}
                    {buyer ? (
                      <div className="card mb-3 mt-5 ml-5" style={{ maxWidth: '540px' }}>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={buyer.avatar} className="card-img rounded-circle img-responsive p-3" style={{ width: '100%', height: '100%' }} alt="" />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title text-info"><span><p className="text-secondary">Buy by</p></span>{buyer.name}</h5>
                              <p className="card-text"><span style={{ fontSize: '18px', color: 'Dodgerblue' }}><i className="fas fa-envelope mr-2" /></span>{buyer.email}</p>
                              <p className="card-text"><span style={{ fontSize: '18px', color: 'Dodgerblue' }}><i className="fas fa-phone mr-2" /></span>{buyer.phone}</p>

                              <p className="card-text mt-3">
                                <p className="text-secondary font-weight-normal" style={{ fontSize: '14px' }}>Sold at</p>
                                <small className="text-muted">{buyer.created_at}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (<div />)}

                    <div className="row ml-">
                      {isLoggedIn && owner.id === user.id ? (<div />) : (
                        <div className="col-xs-6">
                          <div className="col-12 col-md-6 d-flex">
                            <button className="btn btn-outline-primary mr-2" onClick={handleCartItemClick} >
                              <img className="feather feather-globe mr-2 icon-inline" width="30" height="30" src={require(`../../components/Profile/img/cart.png`).default} alt="Cart" />{status}
                            </button>
                          </div>
                          <div className="col-12 col-md-6">
                            <button type="button" className="btn btn-warning shop-button mt-2" data-toggle={auth && "modal"} data-target={auth && "#reportModal"} onClick={() => checkAuth()}>
                              Report
                            </button>
                          </div>
                        </div>)}
                    </div>

                  </div>
                </div>
              </div>

              <div className="row row-underline">
                <div className="col-md-6"> <span className=" deal-text">Specifications</span> </div>
                <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <table className="col-md-12">
                    <tbody>
                      <tr className="row mt-10">
                        <td className="col-6 col-md-4"><span className="p_specification">Owner:</span> </td>
                        <td className="col-6 col-md-8">
                          {owner.name}
                        </td>
                      </tr>
                      <tr className="row mt-10">
                        <td className="col-6 col-md-4"><span className="p_specification">Phone:</span> </td>
                        <td className="col-6 col-md-8">
                          {owner.phone}
                        </td>
                      </tr>
                      <tr className="row mt-10">
                        <td className="col-6 col-md-4"><span className="p_specification">Email:</span> </td>
                        <td className="col-6 col-md-8">
                          {owner.email}
                        </td>
                      </tr>
                      <tr className="row mt-10">
                        <td className="col-6 col-md-4"><span className="p_specification">Address:</span> </td>
                        <td className="col-6 col-md-8">
                          {address.commune}, {address.district}, {address.city}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal fade cart-popup" id="reportModal" tabIndex="-1" role="dialog" aria-hidden="false" modal-toggle>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Report:
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="modal-body">
                        {reportData && <p className="badge badge-success mb-2" style={{ fontSize: "15px" }}>Report Success</p>}
                        <div className="form-group">
                          <label className="control-label">Problem</label>
                          <select {...register("type")}
                            className="form-control"
                          >
                            <option> </option>
                            {reportTypes && Object.keys(reportTypes).map((key, value) => {
                              return (
                                <option value={key} >{reportTypes[key]}</option>
                              )
                            })}
                          </select>
                          {errors.type &&
                            <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px" }}>
                              {errors.type.message}
                            </p>
                          }
                        </div>

                        <div className="form-group">
                          <label className="control-label">Description</label>
                          <div className="">
                            <textarea {...register("description")}
                              id="input-description"
                              className="form-control"></textarea>
                            {errors.description &&
                              <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px" }}>
                                {errors.description.message}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn" data-dismiss="modal" onClick={() => clickClose()} >Close</button>
                        <button type="submit" className="btn btn-success">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
