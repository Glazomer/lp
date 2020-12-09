import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/fonts.css';

import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Section7 from './sections/section7';
import Section8 from './sections/section8';

function LandingPage(props) {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}

ReactDOM.render(<LandingPage />, document.getElementById('root'));
