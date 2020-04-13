import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => (
  <input className='search'
         type='search'
         placeholder={placeHolder}
         onChange={handleChange}
  />
);
/*export const SearchBox = ({placeHolder, handleChange}) => (
  <input classname='search'
         type='search'
         placeholder={placeHolder}
         onChange={handleChange}
  />
);*/
