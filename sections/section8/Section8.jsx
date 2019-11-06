import React, { useState, useEffect, useRef } from 'react';

import Head2 from '../../styled-components/Head2';
import FormWrapper from './FormWrapper';
import Total from './Total';

import imgM from './images/m';
import imgPM from './images/pm';
import imgMO from './images/mo';

import info from './info.json';
import {
  amountContext,
  GetMinAmount,
  RenderComponent
} from './HelpingFunctions';

function PriceCalc({ construct = info, ...props }) {
  const [amount, setAmount] = useState(() => GetMinAmount(construct)),
    formEl = useRef(null),
    total = {};

  const getTotal = () => {
    var totalPrice = 0;
    for (let input of formEl.current) {
      switch (input.name.split('-')[0]) {
        case 'extra':
          if (input.checked) {
            totalPrice += parseInt(input.getAttribute('data-price')) * amount;
          }
          break;
        case 'range':
          totalPrice += parseInt(input.getAttribute('data-price')) * amount;
        default:
          break;
      }
    }

    total.setTotal(totalPrice || 0);
  };

  useEffect(getTotal);

  return (
    <section id='section-8'>
      <amountContext.Provider
        value={{
          amount,
          setAmount: num => setAmount(+num)
        }}
      >
        <form
          ref={formEl}
          onChange={e => e.target.type === 'range' || getTotal()}
        >
          <FormWrapper>
            <Head2>СТОИМОСТЬ ОРГАНИЗАЦИИ МЕРОПРИЯТИЯ</Head2>
            {RenderComponent(construct)}
            <Total update={total} />
          </FormWrapper>
        </form>
      </amountContext.Provider>
    </section>
  );
}

export default PriceCalc;
