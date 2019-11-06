import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-block;
  background: #fe9800;
  padding: 15px 15px;
  border: none;
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:after {
    right: -15px;
    border-width: calc(1em + 30px) 15px 0;
  }

  &:before {
    border-width: 0 15px calc(1em + 30px);
    left: -15px;
  }

  &:after,
  &:before {
    border-color: #fe9800 transparent;
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
    transition: all 0.35s ease;
  }

  &:hover {
    color: #282828;
    background: #f1cc02;
  }
  &:hover:after {
    border-width: calc(1em + 30px) 15px 0;
    border-color: #f1cc02 transparent;
  }
  &:hover:before {
    border-width: 0 15px calc(1em + 30px);
    border-color: #f1cc02 transparent;
  }
`;

export default Button;
