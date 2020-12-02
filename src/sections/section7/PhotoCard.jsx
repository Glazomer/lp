import React from 'react';
import styled from 'styled-components';

import Head3 from '../../styled-components/Head3';

const CardContent = styled.div`
  &:hover {
    background-color: #fe9800;
    & img {
      transform: scale(1.15);
    }
  }
`;

const ImgHolder = styled.div`
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  vertical-align: middle;
  transform: scale(1.05);
`;

const CardText = styled.div`
  padding: 20px 10%;
  text-align: start;
`;

function Card({ src, head, text }) {
  return (
    <CardContent>
      <ImgHolder>
        <CardImg src={src} alt='person' />
      </ImgHolder>
      <CardText>
        <Head3>{head}</Head3>
        {text}
      </CardText>
    </CardContent>
  );
}

export default Card;
