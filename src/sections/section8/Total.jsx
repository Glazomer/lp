import React, { useState } from 'react';
import ContentHolder from './ContentHolder';

function Total({ update, ...props }) {
  const [total, setTotal] = useState(0);
  update.setTotal = setTotal;
  return (
    <ContentHolder style={{ display: 'inline-block' }}>{total}</ContentHolder>
  );
}

export default Total;
