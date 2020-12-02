import React from 'react';
import styled from 'styled-components';

import Head2 from '../../styled-components/Head2';

function Text(props) {
  const TextHolder = styled.div`
    padding: 0 20%;
    @media (max-width: ${BREAKPOINT_M}px) {
      padding: 15px;
    }
  `;
  return (
    <TextHolder>
      <Head2>Современные компании выбирают велоспорт</Head2>
      <p>
        Корпоративные мероприятия формируют имидж компании. Современные компании
        начинают заботиться о здоровье своих работников, мотивируя их вести
        более здоровый образ жизни. Это крайне положительно отражается на имидже
        компаний.
        <br />
        Логика этого стремления проста: здоровые и счастливые работники более
        эффективны.
      </p>
    </TextHolder>
  );
}

export default Text;
