import React from 'react';

import HideIfLessThan from './HideIfLessThan';
import Highlight from './Highlight';

function Intro({ className, ...props }) {
  return (
    <div className={className}>
      <p>
        Активный корпоративный отдых - лучший выбор для сплочения коллектива.
      </p>
      <HideIfLessThan size={BREAKPOINT_M} as='p'>
        Попробуйте новый формат корпоративов на велосипедах! Это увлекательно,
        разнообразно и полезно для здоровья.
      </HideIfLessThan>
      <p>
        <Highlight>Здоровый коллектив - здоровый бизнес!</Highlight>
      </p>
    </div>
  );
}

export default Intro;
