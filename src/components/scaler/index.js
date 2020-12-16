// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Scaler = ({ value, setValue }) => {
  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="scaler flex-columns centered">
      <form className="scaler-form flex-columns centered">
        <input className="scaler-form-input" type="number" placeholder="Jauge" value={value} onChange={onChange} />
        <button className="scaler-form-btn" type="submit">Définir la limite</button>
      </form>
    </div>
  );
}

// export
export default Scaler;
