import React from 'react';
import PropTypes from 'prop-types';

import "./Pagination.css"

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
};

Pagination.defaultProps = {
  onPageChange: null
};

function Pagination(props) {

  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit)

  function handlePageChange(newPage) {
    console.log("get new page: ", newPage);
    if(onPageChange) {
      onPageChange(newPage)
    }
  }

  return (
    <>
      <div className="col-md-12">
        <ul className="pages">
          { _page > 1 &&
            <li onClick={() => handlePageChange(_page - 1)} ><i className="fa fa-angle-double-left"></i></li>   
          }
          <li><a href="#">1</a></li>
          <li className="active"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          {
            _page <= totalPages ?
            <li onClick={() => handlePageChange(_page + 1)} ><i className="fa fa-angle-double-right"></i></li> : null
          }
        </ul>
      </div>
    </>
  );
}

export default Pagination;