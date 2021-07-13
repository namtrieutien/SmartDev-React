import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PostList from '../../components/PostList';
import Pagination from '../../components/Pagination';
import { searchByPriceLoading } from '../../redux/actions/posts/search.action';
import { connect } from "react-redux";

import "./index.css";

function BestPrice(props) {
    const [filters, setFilters] = useState({
        _page: props.pagination._page,
        _limit: props.pagination._limit
    })
    function handlePageChange(newPage) {
        setFilters({
            ...filters,
            _page: newPage
        })
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        const params = {
            _page: filters._page,
            _limit: props.pagination._limit,
            from: 0,
            to: 77000
        }
        props.searchPost(params);
    }, [filters])
    return (
        <div>
            <Header />
            <section className="jumbotron jumbotron-fluid">
                <div className="sign mt-5" style={{ fontSize: '5.5vw' }}>
                    <span className="fast-flicker " >best </span> price<span className="flicker">77</span>k
                </div>
            </section>
            <div className="products">
                <div className="container-fluid ml-5">
                    <div className="row mr-5">
                        <div className="col-md-12">
                            <div className="filters-content">
                                <div className="row">
                                    <PostList load={props.load} posts={props.data} />
                                </div>
                            </div>
                        </div>
                        {
                            props.pagination && <Pagination handlePageChange={handlePageChange} pagination={props.pagination} />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
const mapStateToProps = (state) => {
    const { load, response, pagination, data } = state.postByPriceReducer;
    return {
        load,
        response,
        pagination,
        data,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchPost: (params) => {
            dispatch(searchByPriceLoading(params));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestPrice);