import React from 'react';
import Counter from '../components/Counter';
import Counter2 from '../components/Counter2';

export const CounterPage = () => {
    // prettier-ignore
    return (
  <div className="text-center mt-5">
    <Counter />

    <hr></hr>
    
    <Counter2 />
  </div>
    )
};

export default CounterPage;
