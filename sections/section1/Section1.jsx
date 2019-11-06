import React from 'react';
import styled from 'styled-components';

import bgPC from './images/desktop.jpg';
import bgMob from './images/mobile.jpg';

import Logo from './Logo';
import Paralax from '../../components/Paralax';
import Info from './Info';
import Intro from './Intro';
import BtnGroup from './BtnGroup';

function Section1({ ...props }) {
  const Grid = styled(Paralax)`
    display: grid;
    grid-template-rows: auto auto 1fr 1fr;
    padding: 20px 0px;
    color: white;
    font-weight: 300;
    height: 40vw;
    grid-template-columns: 1fr 500px 1fr;
    font-size: 1.3em;
    @media (max-width: ${BREAKPOINT_M}px) {
      height: 150vw;
      grid-template-columns: 1fr auto 1fr;
      grid-row-gap: 15px;
    }
  `;

  const GridLogo = styled(Logo)`
    grid-column: 2/3;
    grid-row: 1/2;
  `;

  const GridInfo = styled(Info)`
    text-align: initial;
    grid-column: 3/4;
    grid-row: 1/2;
    @media (max-width: ${BREAKPOINT_M}px) {
      text-align: inherit;
      grid-column: 2/3;
      grid-row: 2/3;
    }
  `;

  const GridIntro = styled(Intro)`
    grid-column: 2/3;
    grid-row: 2/3;
    @media (max-width: ${BREAKPOINT_M}px) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
  `;

  const GridBtnGroup = styled(BtnGroup)`
    grid-column: 2/3;
    grid-row: 4/5;
  `;

  return (
    <Grid id='section-1' size='100%' urlL={bgPC} urlM={bgMob}>
      <GridLogo widthPC='100%' widthMob='95%' />
      <GridInfo />
      <GridIntro />
      <GridBtnGroup />
    </Grid>
  );
}

export default Section1;
