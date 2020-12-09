import React from 'react';
import styled from 'styled-components';

import Pralax from '../../components/Paralax';
import Text from './Text';
import Card from './Card';

import url from './images/4-1';
import img1 from './images/4-2';
import img2 from './images/4-3';
import img3 from './images/4-4';

function Section4({ ...props }) {
  const Flex = styled(Pralax)`
    padding: 80px calc(50% - 575px);
    background-attachment: fixed;
    color: white;
    @media (max-width: ${BREAKPOINT_M}px) {
      padding: 80px 20px;
      background-size: auto !important;
    }
  `;

  return (
    <Flex urlL={url}>
      <Text />
      <Card head='Для коллектива' src={img1} />
      <Card head='Для всех возрастов' src={img2} />
      <Card head='Для любого уровня' src={img3} />
    </Flex>
  );
}

export default Section4;
