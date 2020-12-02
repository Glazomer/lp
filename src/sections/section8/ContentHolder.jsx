import styled from 'styled-components';

const ContentHolder = styled.div`
  padding: 15px;
  margin: 20px 0;
  text-align: initial;
  text-decoration-skip-ink: none;
  line-height: 2;
  border-radius: 5px;
  background: rgba(145, 145, 145, 0.6);
  @media (prefers-color-scheme: dark) {
    background: rgba(105, 105, 105, 0.6);
  }
`;

export default ContentHolder;
