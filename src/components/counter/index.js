// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Counter = ({ counter, setCounter }) => {
  const addOne = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  const rmvOne = () => {
    if (counter === 0) return;

    const newCounter = counter - 1;
    setCounter(newCounter);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="counter flex-columns centered">
      <div className="counter-total">{counter}</div>
      <div className="counter-btns flex-columns centered">
        <button onClick={addOne} className="btn btn--add">+</button>
        <button onClick={rmvOne} className="btn btn--rmv">—</button>
      </div>
      <button onClick={reset} className="reset-btn">reset</button>
    </div>
  );
}

// export
export default Counter;
