// src/App.js
import Provider from './context/Provider';

import React from 'react';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <Provider >

      <Cars />
    </Provider>
  );
}

export default App