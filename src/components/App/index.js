// yarn import
import React from 'react';

// import
//  -- styles
import './styles.scss';
//  -- components
import Header from 'src/components/header';
import Scaler from 'src/components/scaler';
import Counter from 'src/components/counter';

// componant
const App = () => (
  <div className="app">
    <Header />
    <Scaler />
    <Counter />
  </div>
);

// export
export default App;
