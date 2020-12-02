import React from 'react';
import styled from 'styled-components';

import Pralax from '../../components/Paralax';
import Button from '../../styled-components/Button';

import url from './images/6-1';

function Section6({ ...props }) {
  const Section6 = styled(Pralax)`
    padding: 100px 10px;
    background-attachment: fixed;
    color: white;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    @media (max-width: ${BREAKPOINT_M}px) {
      font-size: 1.3em;
      background-size: auto !important;
    }
  `;

  return (
    <Section6 urlL={url}>
      <p>
        На протяжении всего маршрута Вас сопровождает команда Corvel.
        <br />
        Пока Вы наслаждаетесь самим процессом, мы следим за безопасностью.
      </p>
      <Button>Заказать заезд</Button>
    </Section6>
  );
}

export default Section6;
