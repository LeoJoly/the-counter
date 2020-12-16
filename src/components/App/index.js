// yarn import
import React from 'react';

// import
//  -- styles
import './styles.scss';
//  -- components
import Header from 'src/components/header';
import Scaler from 'src/components/scaler';

// componant
const App = () => (
  <div className="app">
    <Header />
    <Scaler />
  </div>
);

// export
export default App;
