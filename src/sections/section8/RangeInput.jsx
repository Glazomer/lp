import React, { useContext } from 'react';
import styled from 'styled-components';
import { amountContext, GetPrice, RenderComponent } from './HelpingFunctions';

const RangeLable = styled.label`
  margin: 0px 15px;
`;

const RangeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  user-select: none;
  span {
    display: inline-block;
    padding: 5px 15px;
    background: rgba(254, 152, 0, 0.8);
    border-radius: 3px;
  }
`;

const RangedInput = styled.div`
  display: flex;
  user-select: none;
  input {
    flex: 1 0 auto;
    margin: 0 15px;
    cursor: pointer;

    /* TRACK */
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: auto; /* Specific width is required for Firefox. */
    background: transparent;
    &::-webkit-slider-runnable-track {
      height: 8px;
      background: #b2b2b2;
    }
    &::-moz-range-track {
      height: 8px;
      background: #b2b2b2;
    }
    &::-ms-track {
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-ms-fill-lower,
    &::-ms-fill-upper {
      height: 8px;
      background: #b2b2b2;
    }
    &:focus {
      outline-color: rgba(
        254,
        152,
        0,
        0.5
      ); /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }
    &::-moz-focus-outer {
      border-color: rgba(254, 152, 0, 0.8);
    }

    /* THUMB */
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 36px;
      height: 36px;
      margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      background: #fe9800;
      border-radius: 8px;
    }
    &::-moz-range-thumb {
      -webkit-appearance: none;
      width: 36px;
      height: 36px;
      margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      background: #fe9800;
      border-radius: 8px;
    }
    &::-ms-thumb {
      -webkit-appearance: none;
      width: 36px;
      height: 36px;
      margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      background: #fe9800;
      border-radius: 8px;
    }
  }
`;

function RangeInput({ head, range, min, max, next, hidden, num, ...props }) {
  const { amount, setAmount } = useContext(amountContext);

  if (amount < min) setAmount(min);
  else if (amount > max) setAmount(max);

  var price;

  return (
    <>
      <RangeLable>
        <RangeInfo>
          <div>
            {head}
            <span>{amount}</span>
          </div>
          <span>{(price = GetPrice(range))}</span>
        </RangeInfo>
        <RangedInput>
          <span>{min}</span>
          <input
            type='range'
            name={'range-' + num}
            data-price={price}
            min={min}
            max={max}
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}
          />
          <span>{max}</span>
        </RangedInput>
      </RangeLable>
      {RenderComponent(next, hidden, ++num)}
    </>
  );
}

export default RangeInput;
