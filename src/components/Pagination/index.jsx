import React from 'react';
import PropTypes from 'prop-types';

import "./Pagination.css"


let  SHOW_PAGES_MAX = 5;

function Pagination(props) {
  const { pagination, handlePageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit)
  
  var currentPages = new Array();
  var startIndexOfPages = (_page <= totalPages - SHOW_PAGES_MAX) ? _page: (totalPages - SHOW_PAGES_MAX);
  for (var i = startIndexOfPages; i < startIndexOfPages + SHOW_PAGES_MAX; i++) {
    currentPages[i] = i;
  }

  return (
    <>
      <div className="col-md-12">
        <ul className="pages">

          {
            _page > 0 ?
              <li>
                <a onClick={() => handlePageChange(_page - 1)}> <i className="fa fa-angle-left"></i> </a>
              </li>
              : null
          }
          {
            _page >= 1 ?
              <li>
                <a onClick={() => handlePageChange(1)}>{1}</a>
              </li>
              : null
          }

          {
            _page >= 2 ?
              <li>
                <a onClick={() => handlePageChange(_page - SHOW_PAGES_MAX <= 0 ? 0 : _page - SHOW_PAGES_MAX)}> <i className="fa fa-angle-double-left"></i> </a>
              </li>
              : null
          }

          {
            currentPages.map(page =>
              <li className={(_page) === page ? 'active' : ''}>
                <a onClick={() => handlePageChange(page)}>{page + 1}</a>
              </li>
            )
          }

          {
            _page < (totalPages - SHOW_PAGES_MAX) ?
              <li>
                <a onClick={() => handlePageChange(_page + SHOW_PAGES_MAX)}> <i className="fa fa-angle-double-right"></i> </a>
              </li>
              : null
          }
          {
            _page < (totalPages - SHOW_PAGES_MAX) ?
              <li>
                <a onClick={() => handlePageChange(totalPages - 1)}> {totalPages} </a>
              </li>
              : null
          }

          {
            _page < (totalPages - 1) ?
              <li>
                <a onClick={() => handlePageChange(_page + 1)}> <i className="fa fa-angle-right"></i> </a>
              </li>
              : null
          }

        </ul>
      </div>
    </>
  );
}

export default Pagination;