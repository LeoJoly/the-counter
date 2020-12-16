// yarn import
import React, { useState } from 'react';

// import
//  -- styles
import './styles.scss';
//  -- components
import Header from 'src/components/header';
import Scaler from 'src/components/scaler';
import Counter from 'src/components/counter';

// componant
const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className="app">
      <Header />
      <Scaler value={value} setValue={setValue} />
      <Counter />
    </div>
  );
};

// export
export default App;
