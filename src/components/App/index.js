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
  const [scale, setScale] = useState(0);
  const [counter, setCounter] = useState(0);

  console.log(scale);

  return (
    <div className="app">
      <Header />
      <Scaler value={value} setValue={setValue} setScale={setScale} />
      <Counter counter={counter} setCounter={setCounter} scale={scale} />
    </div>
  );
};

// export
export default App;
