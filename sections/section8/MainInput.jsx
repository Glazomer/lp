import React, { useState } from 'react';
import styled from 'styled-components';

import { FilterContent, RenderComponent } from './HelpingFunctions';
import ContentHolder from './ContentHolder';
import ContentList from './ContentList';
import Head4 from '../../styled-components/Head4';
import tick from './images/tick.svg';

const Tick = styled.span`
&::before{
  content: "";
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  vertical-align: text-top;
  margin-right: 10px;
  background: url("${tick}") center/100%;
}
`;

const ChoisesHolder = styled(ContentHolder)`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    & > * {
      width: 100%;
      margin: 0;
    }
  }
`;

const LabeledInput = styled.label`
  display: block;
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;

    &:checked + div {
      background: #fe9800;
      color: black;
      text-decoration: none;
    }
  }

  div {
    color: #fe9800;
    padding: 0 15px;
    border-radius: 3px;
    transition: all 0.35s cubic-bezier(0.58, 0.43, 0.25, 1);
    text-decoration: underline;

    &:hover,
    &:active,
    &:focus {
      background: rgba(254, 152, 0, 0.5);
      color: black;
      text-decoration: none;
    }
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

function MainInput({ head, name = head, inputs, num, ...props }) {
  const [checked, setChecked] = useState(0);

  const choices = inputs.map((input, i) => (
    <dd key={i}>
      <LabeledInput>
        <input
          type='radio'
          name={'main-' + num}
          value={input.value}
          checked={i === checked}
          onChange={() => setChecked(i)}
        />
        <div>{input.value}</div>
      </LabeledInput>
    </dd>
  ));

  const content = inputs.map((input, i) => (
    <li key={i} style={{ display: i !== checked ? 'none' : 'block' }}>
      {input.src && <Img alt={input.value} src={`${input.src}`} />}
      {Array.isArray(input.texts) &&
        input.texts.map((text, i) => (
          <ContentHolder key={i}>
            <Head4>{text.head}</Head4>
            {FilterContent(text.body)
              .split('\n')
              .map(
                (line, i) =>
                  line.trim() && (
                    <span key={i}>
                      <Tick>{line.trim()}</Tick>
                      <br />
                    </span>
                  )
              )}
          </ContentHolder>
        ))}
      {i === checked && RenderComponent(input.next, ++num)}
    </li>
  ));

  return (
    <>
      <ChoisesHolder as='dl'>
        <dt>{head}</dt>
        {choices}
      </ChoisesHolder>
      <ContentList>{content}</ContentList>
    </>
  );
}

export default MainInput;
