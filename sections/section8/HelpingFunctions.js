import React, { useContext } from 'react';
import MainInput from './MainInput';
import RangeInput from './RangeInput';
import ExtraInput from './ExtraInput';

const amountContext = React.createContext({ num: 0, setNum() {} });

const CustomComponents = {
  MainInput,
  RangeInput,
  ExtraInput
};

function RenderComponent(el, num = 0) {
  if (el && CustomComponents[el.compType])
    return React.createElement(
      CustomComponents[el.compType],
      { ...el.compProps, num },
      el.Children
    );
  return false;
}

function GetMinAmount(info) {
  for (let el = info; el !== undefined; el = el.compProps.inputs[0].next)
    if (el.compType === 'RangeInput') return +el.compProps.min;
  return 0;
}

function FilterContent(str) {
  const { amount } = useContext(amountContext);

  if (typeof str !== 'string') return str;

  var result = '',
    match = null;
  const regExp = /^ *\( *(\d+) *- *(\d+) *\) *(.*)/;

  for (let line of str.split('\n')) {
    if ((match = regExp.exec(line))) {
      if (amount >= match[1] && amount <= match[2]) {
        result += match[3] + '\n';
      }
    } else {
      result += line + '\n';
    }
  }
  return result;
}

function GetPrice(range) {
  var { amount } = useContext(amountContext),
    price = 0;
  while (!(price = range[amount--]) && amount >= 0);
  return price;
}

export {
  amountContext,
  FilterContent,
  GetMinAmount,
  GetPrice,
  RenderComponent
};
