import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const MyPagination = ({totalPages, page, changePage}) => {
  const pagesArray = usePagination(totalPages)


  return (
    <div className="pagination">
      {pagesArray.map((p) =>
        <div
          onClick={() => {changePage(p)}}
          className={page === p ? 'pagination__btn active' : 'pagination__btn'}
          key={p}>
          {p}
        </div>
      )}
    </div>
  );
};

export default MyPagination;