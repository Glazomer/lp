import styled from 'styled-components';

const Head2 = styled.h2`
  margin: 0px;
  font-size: 2.25rem;
  @media (max-width: ${BREAKPOINT_M}px) {
    font-size: 1.75rem;
  }
  @media (max-width: ${BREAKPOINT_S}px) {
    font-size: 1.5rem;
  }
`;

export default Head2;
