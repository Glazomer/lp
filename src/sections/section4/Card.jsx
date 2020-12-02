import React from 'react';
import styled from 'styled-components';

import Head4 from '../../styled-components/Head4';

const CardHolder = styled.div`
  display: inline-block;
  margin: 100px 60px 0px;
`;

function Card({ src, head }) {
  return (
    <CardHolder>
      <img src={src} alt='person' />
      <Head4>{head}</Head4>
    </CardHolder>
  );
}

export default Card;
