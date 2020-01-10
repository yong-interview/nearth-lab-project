import React from 'react';
import './Pagination.scss';

import { NavLink } from 'react-router-dom';
import right from '../../images/right.png';
import left from '../../images/left.png';

const Pagination = ({ currentPage, maxPage }) => {
  const pageNumbers = [];
  if(currentPage <= 4) {
    for (let i = 1; i <= 6; i++) {
      pageNumbers.push(i);
    }
  } else if(currentPage >= maxPage - 3) {
    for (let i = currentPage - 2 ; i <= maxPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = currentPage - 3; i <= currentPage + 2; i++) {
      pageNumbers.push(i);
    }
  } 
  
  const createPagePath = (page) => {
    return `/page/${page}`;
  }

  return (
      <ul className='pagination'>
        <li key="left">
          <NavLink to={createPagePath(currentPage-1)}>
            <img src={left} alt="left" />
          </NavLink>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <NavLink to={createPagePath(number)} activeClassName="active">
              {number}
            </NavLink>
          </li>
        ))}
        <li key="right" className="right">
          <NavLink to={createPagePath(currentPage+1)}>
            <img src={right} alt="right" />
          </NavLink>
        </li>
      </ul>
  );
};

export default Pagination;