import React, { useState } from 'react';
import CarsContext from './CarsContext';


function Provider ({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const moveCar = (car, side) => {
    setCars({...cars, [car]: side})
  };
  console.log('Provider:', cars);
  return (
    <CarsContext.Provider value={{ cars, moveCar}} >
      {children}
      </CarsContext.Provider>
  )
}
  

export default Provider;