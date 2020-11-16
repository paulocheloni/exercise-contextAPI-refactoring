// src/App.js
import CarsProvider from './context/CarsProvider';
import TrafficSignal from './TrafficSignal';
import TrafficProvider from './context/TrafficProvider'
import React from 'react';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <>
    <TrafficProvider>
      <TrafficSignal />

    <CarsProvider >      
      <Cars />
    </CarsProvider>

    </TrafficProvider>

    </>
  );
}

export default App