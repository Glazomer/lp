import styled from 'styled-components';

const HideIfLessThan = styled.span`
  @media (max-width: ${props => props.size}px) {
    display: none;
  }
`;

export default HideIfLessThan;
