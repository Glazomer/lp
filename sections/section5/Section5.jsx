import React from 'react';
import styled from 'styled-components';

import TextWithImage from '../../components/TextWithImage';
import Head2 from '../../styled-components/Head2';
import Head3 from '../../styled-components/Head3';

import img1 from './images/5-1';
import img2 from './images/5-2';
import img3 from './images/5-3';

function Section5({ ...props }) {
  const Header2 = styled(Head2)`
      padding: 70px 0;
      background-color: #ffffff;
    `,
    Text = styled.div`
      padding: 50px 0;
      line-height: 1.5;
    `,
    text1 = (
      <Text>
        <Head3>Сбор участников</Head3>
        <p>
          Доставка велосипедов
          <br />
          Сбор участников в назначенное время
          <br />
          Настройка велосипедов
          <br />
          Инструктаж
          <br />
        </p>
      </Text>
    ),
    text2 = (
      <Text>
        <Head3>Заезды</Head3>
        <p>
          На протяжении всего маршрута Вас сопровождает команда Corvel. Вы
          наслаждаетесь природой и видами, а мы следим за безопасностью!
        </p>
      </Text>
    ),
    text3 = (
      <Text>
        <Head3>Завершение заезда</Head3>
        <p>
          Велозаезд может заканчиваться несколькими вариантами, начиная с
          организованного разъезда по домам, заканчивая культурной программой на
          природе с музыкой и шашлыками.
        </p>
      </Text>
    );
  return (
    <section>
      <Header2>Как проходит заезд?</Header2>
      <TextWithImage img={img1} text={text1} />
      <TextWithImage img={img2} text={text2} reverse />
      <TextWithImage img={img3} text={text3} />
    </section>
  );
}

export default Section5;
