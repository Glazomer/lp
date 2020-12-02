import React, { useState } from 'react';
import styled from 'styled-components';

import { GetPrice, FilterContent, RenderComponent } from './HelpingFunctions';
import ContentHolder from './ContentHolder';
import Head4 from '../../styled-components/Head4';
import ContentList from './ContentList';

const GrayIcon = styled.div`
  display: none;
  vertical-align: middle;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #eeeeee;
  margin-right: 15px;
`;

const GrayHolder = styled.div`
  display: inline-block;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 5px;
  background: rgba(205, 205, 205, 0.8);
  white-space: nowrap;
`;

const ExtraLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  user-select: none;

  &:hover ${GrayIcon} {
    background: #bbbbbb;
  }

  &:hover:active ${GrayIcon} {
    background: #999999;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:focus ~ ${GrayIcon} {
      background: #bbbbbb;
    }
    &:focus:active ~ ${GrayIcon} {
      background: #999999;
    }
    &:checked ~ {
      &${GrayIcon}, &${GrayHolder} {
        background: rgba(254, 152, 0, 0.8);
      }
    }
    &[type='checkbox'] {
      & ~ ${GrayIcon} {
        display: block;
        border-radius: 3px;
      }
      &:checked ~ ${GrayIcon}:after {
        content: '✔';
        display: block;
        font-size: 28px;
        position: relative;
        left: 4px;
        top: 0px;
      }
    }

    &[type='radio'] {
      & ~ ${GrayIcon} {
        display: block;
        border-radius: 100%;
      }
      &:checked ~ ${GrayIcon}:after {
        content: '';
        display: block;
        width: 45%;
        height: 45%;
        position: relative;
        left: 27.5%;
        top: 27.5%;
        background: white;
        border-radius: 100%;
      }
    }
  }
`;

function ExtraInput({
  head,
  inputs,
  name,
  type = 'checkbox',
  next,
  num,
  ...props
}) {
  const [selected, setSelected] = useState(0);
  var price = 0;

  return (
    <>
      <ContentHolder as='dl'>
        <dt>
          <Head4>{head}</Head4>
        </dt>
        {inputs.map((input, i) => (
          <ContentList as='dd' key={i}>
            {RenderComponent(input, `${num}${i}.`) || (
              <>
                <ExtraLabel>
                  <input
                    type={type}
                    name={'extra-' + num + (type === 'radio' ? '' : i)}
                    data-price={(price = GetPrice(input.price.range))}
                    value={price}
                    checked={(selected >> i) % 2}
                    onChange={() =>
                      setSelected(
                        num => (num += (num >> i) % 2 ? -(1 << i) : 1 << i)
                      )
                    }
                  />
                  <GrayIcon></GrayIcon>
                  <span>{input.head}</span>
                  <GrayHolder>{price}</GrayHolder>
                </ExtraLabel>
                <div
                  style={{ display: (selected >> i) % 2 ? 'block' : 'none' }}
                >
                  {input.src && <img alt={input.value} src={`${input.src}`} />}
                  {input.body && (
                    <ContentHolder>{FilterContent(input.body)}</ContentHolder>
                  )}
                </div>
              </>
            )}
          </ContentList>
        ))}
      </ContentHolder>
      {RenderComponent(next, ++num)}
    </>
  );
}

export default ExtraInput;
