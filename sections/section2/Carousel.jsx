import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import i0 from './images/0.png';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';
import i4 from './images/4.png';
import i5 from './images/5.png';
import i6 from './images/6.png';
import i7 from './images/7.png';
import i8 from './images/8.png';
import i9 from './images/9.png';
import i10 from './images/10.png';
import i11 from './images/11.png';

const images = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];

function Carousel({ className, ...props }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const elements = carouselRef.current.getElementsByTagName('li'),
      { marginLeft, marginRight } = window.getComputedStyle(elements[0]),
      width =
        '-' +
        (parseInt(elements[0].offsetWidth) +
          parseInt(marginLeft) +
          parseInt(marginRight)) +
        'px';

    const MoveCaruosel = () => {
      const ul = carouselRef.current;

      ul.appendChild(ul.getElementsByTagName('li')[0]);
      ul.style.transition = 'none';
      ul.style.left = '0px';
      // Force the page reflow, so animtion works
      ul.FORCERED_REFLOW = ul.offsetWidth;
      // Force the page reflow, so animtion works
      ul.style.transition = '5s linear left';
      ul.style.left = width;
    };
    MoveCaruosel();
    const id = setInterval(MoveCaruosel, 5000);

    return () => clearInterval(id);
  }, []);

  const CarouselHolder = styled.div`
    position: relative;
    background: #fe9800;
    white-space: nowrap;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 90px;
      height: 100%;
      left: 0px;
      top: 0px;
      background: linear-gradient(to top left, transparent 50%, #ffffff 50%);
      z-index: 1;
    }
  `;

  const Carousel = styled.ul`
    height: 100%;
    margin: 0px;
    padding: 10px 0px;
    position: relative;
  `;

  const LogoHolder = styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 200px;
    width: 200px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: #ffffff;
  `;

  const Logo = styled.img`
    max-width: 180px;
    max-height: 100px;
  `;

  return (
    <CarouselHolder className={className}>
      <Carousel ref={carouselRef}>
        {images.map((img, i) => (
          <LogoHolder key={i}>
            <Logo alt='logo' src={img} />
          </LogoHolder>
        ))}
      </Carousel>
    </CarouselHolder>
  );
}

export default Carousel;
