import React, { useState } from "react";
import style from "./LeftOverCommonComponents.module.css";

function Pagination() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 10;

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className={style.paginationOuter}>
      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        return (
          <p
            key={i}
            className={`${style.page} ${
              pageNumber === activePage ? style.activePage : ""
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </p>
        );
      })}
      <div
        className={style.page2}
        onClick={() => handlePageClick(activePage + 1)}
      >
        <img src="/images/teacher/page1.svg" alt="" className={style.arrow1} />
      </div>
      <div className={style.page2} onClick={() => handlePageClick(totalPages)}>
        <img src="/images/teacher/page2.svg" alt="" className={style.arrow2} />
      </div>
    </div>
  );
}

export default Pagination;
