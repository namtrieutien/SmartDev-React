import React from 'react';
import PropTypes from 'prop-types';

import "./Pagination.css"



function Pagination(props) {
  const { pagination, handlePageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit)

  var pages = new Array();
  for (var i = 0; i < totalPages; i++) {
    pages[i] = i;
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