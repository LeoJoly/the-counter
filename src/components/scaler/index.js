// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Scaler = () => (
  <div className="scaler flex-columns centered">
    <form className="scaler-form flex-columns centered">
      <input className="scaler-form-input" type="number" placeholder="Jauge" />
      <button className="scaler-form-btn" type="submit">Définir la limite</button>
    </form>
  </div>
);

// export
export default Scaler;
