import React from 'react';
import styled from 'styled-components';

import Head2 from '../../styled-components/Head2';
import Carousel from './Carousel';

function Section2({ ...props }) {
  const Flex = styled.section`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    overflow: hidden;
    @media (max-width: ${BREAKPOINT_M}px) {
      padding-top: 0px;
      flex-direction: column;
    }
  `;

  const CarouselHead2 = styled(Head2)`
    margin: 40px 20px;
  `;

  const FlexCarounsel = styled(Carousel)`
    flex: 1;
    min-width: 70%;
  `;

  return (
    <Flex id='section-2'>
      <CarouselHead2>С нами уже катались:</CarouselHead2>
      <FlexCarounsel />
    </Flex>
  );
}

export default Section2;
