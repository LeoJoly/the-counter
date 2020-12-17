// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Counter = ({ counter, setCounter, scale }) => {

  const totalCss = counter < scale ? 'counter-total' : 'counter-total counter-total--danger'
  const addCss = counter < scale ? 'btn btn--add' : 'btn btn--add btn--add--danger'

  // se déclanche sur le outon "+"
  const addOne = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }

  // se déclenche sur le bouton "-"
  const rmvOne = () => {
    if (counter === 0) return;

    const newCounter = counter - 1;
    setCounter(newCounter);
  }

  // se déclanche sur le bouton reset
  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="counter flex-columns centered">
      <div className={totalCss}>{counter}</div>
      <div className="counter-btns flex-columns centered">
        <button onClick={addOne} className={addCss}>+</button>
        <button onClick={rmvOne} className="btn btn--rmv">—</button>
      </div>
      <button onClick={reset} className="reset-btn">reset</button>
    </div>
  );
}

// export
export default Counter;
