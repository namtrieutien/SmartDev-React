import React from 'react';
import PropTypes from 'prop-types';

import "./Pagination.css"

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
};

Pagination.defaultProps = {
  pagination: {
    _page: 0,
    _limit: 5,
    _totalRows: 100
  },
  onPageChange: null
};

function Pagination(props) {

  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit)

  var pages = new Array();
  for (var i = 0; i < totalPages; i++) {
    pages[i] = i;
  }

  function handlePageChange(newPage) {
    console.log("get new page: ", newPage);
    if (onPageChange) {
      onPageChange(newPage)
    }
  }

  return (
    <>
      <div className="col-md-12">
        <ul className="pages">

          {
            _page > 0 ?
              <li>
                <a onClick={() => handlePageChange(_page - 1)}> <i className="fa fa-angle-double-left"></i> </a>
              </li>
              : null
          }

          {
            pages.map(page =>
              <li className={(_page) === page ? 'active' : ''}>
                <a onClick={() => handlePageChange(page)}>{page + 1}</a>
              </li>
            )
          }

          {
            _page < totalPages - 1 ?
              <li>
                <a onClick={() => handlePageChange(_page + 1)}> <i className="fa fa-angle-double-right"></i> </a>
              </li>
              : null
          }
        </ul>
      </div>
    </>
  );
}

export default Pagination;