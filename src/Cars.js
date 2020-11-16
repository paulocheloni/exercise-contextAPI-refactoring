import React, {useContext, useEffect, useState, useRef} from 'react'
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

  useEffect(() => {
    const veryfiSignalColor = (signalColor) => {
    const colorMovementMatches = {
      red: false,
      yellow: true,
      green: true,
    };
    setStreetMovement(colorMovementMatches[signalColor]);
    }
    veryfiSignalColor(signalColor);
  }, [signalColor, setStreetMovement]);

  

  

  useEffect(() => {
      console.log('\nsignalColor', signalColor, '\nredCar',redCar, '\nyellow',yellowCar, '\nblue',blueCar)
      const startCarsMovement = () => {
        const carsOnMovement = Object.keys(cars).filter(key => !cars[key])
        console.log(
          '\n carsMovement',
          ...carsOnMovement,
          '\n yellowCar: ',
          yellowCar,
          `\n current boolean side ${cars[carsOnMovement]}`
        )
        carsMovementRef.current = setTimeout(() => moveCar(...carsOnMovement, false), 1200)
     }
      if (signalColor !== 'red') {
        startCarsMovement()

        
      } else {
        
      }

      return () => {
          clearTimeout(carsMovementRef.current)
        }    
  }, [redCar, blueCar, yellowCar, signalColor])
  
  
  

   return (
      <div>
        <div className='container'>
             <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('redCar', !redCar)}
            type="button"
            disabled={!streetMovement}
          >
            move
          </button>

           <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blueCar', !blueCar)}
            type="button"
            disabled={!streetMovement}

            
          >
            move
          </button>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellowCar', !yellowCar)}
            type="button"
            disabled={!streetMovement}

          >
            move
        </button>
        </div>
      </div>
    )

  }

  



export default Cars;