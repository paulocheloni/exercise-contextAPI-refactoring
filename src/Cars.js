import React, {useContext, useEffect, useState, useRef} from 'react';
import CarsContext from './context/CarsContext';
import TrafficContext from './context/TrafficContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars () {
  const { moveCar, cars } = useContext(CarsContext);
  const {signalColor} = useContext(TrafficContext);
  const [streetMovement, setStreetMovement] = useState(true);
  const {redCar, blueCar, yellowCar} = cars;
  const carsMovementRef = useRef();
  const mount = useRef();

  useEffect(() => {
    const verifySignalColor = (signalColor) => {
    const colorMovementMatches = {
      red: false,
      yellow: true,
      green: true,
    };
    setStreetMovement(colorMovementMatches[signalColor]);
    }
    verifySignalColor(signalColor);
  }, [signalColor, setStreetMovement]);  

  useEffect(() => {     
      const startCarsMovement = () => {
          const carsOnMovement = Object.keys(cars).filter(key => !cars[key]);
          const carsMoved = Object.keys(cars).filter(key => cars[key]);

        if (signalColor !== 'red') {         
          carsMovementRef.current = setTimeout(() => 
            carsOnMovement.forEach(car => moveCar(car, true)), 5);
          if (mount.current) setTimeout(() => carsOnMovement.forEach(car => moveCar(car, false)), 2020);
        } else {
          clearTimeout(carsMovementRef.current);   
          carsMoved.forEach(car => moveCar(car, false));
        }
        mount.current = true;
     }  
      startCarsMovement();    
      return () => {
          clearTimeout(carsMovementRef.current);
      }    
  }, [redCar, blueCar, yellowCar, signalColor]); 

   return (
      <div>
        <div className='container'>
             <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />          

           <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          
        </div>
      </div>
    )
  }

export default Cars;