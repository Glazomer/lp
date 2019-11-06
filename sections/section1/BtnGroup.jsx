import React from 'react';
import styled from 'styled-components';

import HideIfLessThan from './HideIfLessThan';
import Button from '../../styled-components/Button';

function BtnGroup({ className }) {
  const BtnGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <BtnGroup className={className}>
      <Button>Заказать звонок</Button>
      <HideIfLessThan size={BREAKPOINT_M}>
        <Button as='a'>Узнать подробнее</Button>
      </HideIfLessThan>
    </BtnGroup>
  );
}

export default BtnGroup;
