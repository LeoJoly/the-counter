// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Counter = () => (
  <div className="counter flex-columns centered">
    <div className="counter-total">17</div>
    <div className="counter-btns flex-columns centered">
      <button className="btn btn--add">+</button>
      <button className="btn btn--rmv">—</button>
    </div>
  </div>
);

// export
export default Counter;
