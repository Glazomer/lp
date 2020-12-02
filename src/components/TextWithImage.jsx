import React from 'react';
import styled from 'styled-components';

import ResponsiveImg from '../styled-components/ResponsiveImg';

function Section3({ img, text, reverse, as, ...props }) {
  const AdaptiveHolder = styled.div`
    position: relative;
  `;

  const AdaptiveImg = styled(ResponsiveImg)`
    background-position: center;
    background-size: cover;
    width: calc(100% / 1.5);
    height: 100%;
    position: absolute;
    ${reverse ? 'right' : 'left'}: 0;
    pointer-events: none;
    @media (max-width: ${BREAKPOINT_S}px) {
      width: 100%;
    }
  `;

  const AdaptiveParagraph = styled.div`
    ${`margin-${reverse ? 'right' : 'left'}`}: calc(100% / 1.5);
    text-align: left;
    vertical-align: top;
    box-sizing: border-box;
    padding: 80px 40px;
    position: relative;
    @media (max-width: ${BREAKPOINT_S}px) {
      background-color: rgba(241, 245, 246, 0.75);
      width: 100%;
      margin-left: 0px;
      z-index: 1;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 150px;
      height: 100%;
      top: 0px;
      z-index: 1;
    }
    &::before {
      left: -150px;
      background: linear-gradient(
        to right bottom,
        transparent 50%,
        ${ROOT_BG_COLOR} 50%
      );
    }
    &::after {
      right: -150px;
      background: linear-gradient(
        to left top,
        transparent 50%,
        ${ROOT_BG_COLOR} 50%
      );
    }
  `;

  return (
    <AdaptiveHolder as={as}>
      <AdaptiveImg urlL={img} alt='happy people' />
      <AdaptiveParagraph>{text}</AdaptiveParagraph>
    </AdaptiveHolder>
  );
}

export default Section3;
