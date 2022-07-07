import React, { FC, useState } from 'react';
import style from './Pagination.scss';

const Pagination = () => {
  return (
    <div>
      <p>1 из 8</p>
      <div>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
    </div>
  );
};

export default Pagination;
