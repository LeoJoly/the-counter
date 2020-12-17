// yarn import
import React from 'react';

// import
import './styles.scss';

// componant
const Scaler = ({ value, setValue, setScale }) => {

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setScale(value);
  }

  return (
    <div className="scaler flex-columns centered">
      <form className="scaler-form flex-columns centered" onSubmit={onSubmit}>
        <input className="scaler-form-input" type="number" placeholder="Jauge" value={value} onChange={onChange} />
        <button className="scaler-form-btn" type="submit">Définir la limite</button>
      </form>
    </div>
  );
}

// export
export default Scaler;
