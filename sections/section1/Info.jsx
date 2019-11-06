import React from 'react';
import styled from 'styled-components';

import Highlight from './Highlight';

function Info({ className, ...props }) {
  const Info = styled.div`
    display: inline-block;
    margin-left: 10px;
    position: relative;
    white-space: nowrap;
  `;

  const MakeBottom = styled.div`
    position: absolute;
    bottom: 0;
    @media (max-width: ${BREAKPOINT_M}px) {
      position: initial;
    }
  `;

  return (
    <Info className={className}>
      <Highlight as='a' href='tel:+74951319183'>
        8 (495) 131-91-83
      </Highlight>
      <MakeBottom>пн-пт с 11:00 до 17:00</MakeBottom>
    </Info>
  );
}

export default Info;
