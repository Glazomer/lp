import React from 'react';
import styled from 'styled-components';

import logoPC from './images/logo_pc.jpg';
import logoMob from './images/logo_mob.jpg';

function Logo({ widthMob = 'auto', widthPC = 'auto', className, ...props }) {
  const LogoMob = styled.img`
    width: ${widthMob};
    display: none;
    @media (max-width: ${BREAKPOINT_M}px) {
      display: initial;
    }
  `;
  const LogoPC = styled.img`
    width: ${widthPC};
    @media screen and (max-width: ${BREAKPOINT_M}px) {
      display: none;
    }
  `;
  return (
    <div className={className}>
      <LogoMob src={logoMob} />
      <LogoPC src={logoPC} />
    </div>
  );
}

export default Logo;
