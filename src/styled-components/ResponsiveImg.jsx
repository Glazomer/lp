import styled from 'styled-components';

const ResponsiveImg = styled.div`
  background-image: url("${({ urlL }) => urlL}");
  ${({ urlM }) =>
    urlM &&
    `@media (max-width: ${BREAKPOINT_M}px)
    {
      background-image: url("${urlM}");
    }`}
  ${({ urlS }) =>
    urlS &&
    `@media (max-width: ${BREAKPOINT_S}px)
      {
        background-image: url("${urlS}");
    }`}
`;

export default ResponsiveImg;
