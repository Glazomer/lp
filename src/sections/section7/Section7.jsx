import React from 'react';
import styled from 'styled-components';

import Head2 from '../../styled-components/Head2';
import Card from './PhotoCard';

import img1 from './images/7-1';
import img2 from './images/7-2';
import img3 from './images/7-3';
import img4 from './images/7-4';
import img5 from './images/7-5';

function Section7({ ...props }) {
  const Header2 = styled(Head2)`
    background-color: #ffffff;
    padding: 70px 0;
  `;

  const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > * {
      flex: 1 1 calc(100% / 3);
    }

    @media (max-width: ${BREAKPOINT_S}px) {
      & > * {
        flex: 1 1 100%;
      }
    }
  `;

  const text4 = (
    <p>
      Хочется приключений? Команда Corvel разработает для Вас велоквест.
      Интересные задания, головоломки и сюжетные линии превратят обычный
      велозаезд в настоящее незабываемое приключение! Попробуйте, Вам точно
      понравится!
    </p>
  );

  const text5 = (
    <p>
      Хочется больше знаний? Мы разработаем программу с учетом Ваших интересов.
      В интересном и необычном формате мы расскажем вам множество увлекательных
      фактов и историй.
    </p>
  );

  return (
    <section>
      <Header2>Вам понравятся наши маршруты</Header2>
      <CardsHolder>
        <Card src={img1} head='Живописные места без выездов на дороги' />
        <Card src={img2} head='Маршруты любой сложности' />
        <Card src={img3} head='Активный отдых на природе' />
        <Card src={img4} head='Разработка квестов' text={text4} />
        <Card src={img5} head='Велоэкскурсии' text={text5} />
      </CardsHolder>
    </section>
  );
}

export default Section7;
