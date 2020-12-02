import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ResponsiveImg from '../styled-components/ResponsiveImg';

function Paralax({ id, className, speed = 10, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const paralax = e =>
      (ref.current.style.backgroundPositionY =
        (ref.current.offsetTop - window.scrollY) / speed + 'px');
    document.addEventListener('scroll', paralax);
    document.addEventListener('touchmove', paralax);
    return () => {
      document.removeEventListener('scroll', paralax);
      document.removeEventListener('touchmove', paralax);
    };
  }, [speed]);

  const BG = styled(ResponsiveImg)`
    background-position-x: center;
    transition: none;
    background-size: cover;
  `;

  return (
    <BG {...props} as='section' ref={ref} id={id} className={className}>
      {children}
    </BG>
  );
}

export default Paralax;
