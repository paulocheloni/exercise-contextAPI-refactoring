 //src/Cars.jsx

import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const initialState = {
  red: false,
  blue: false,
  yellow: false,
}

function reducer(state,action) {
  switch (action.type) {
    case 'MOVE_CAR' :
      return {...state, [action.car] : action.value};
    default :
      return state;
  }
}

const moveCar = (car, value) => ({
  type: 'MOVE_CAR',
  car,
  value,
})

function Cars() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {red, blue, yellow} = state;
  return (
    <div>
      <div>
        <img
          className={red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => dispatch(moveCar('red', !red))}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => dispatch(moveCar('blue', !blue))}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => dispatch(moveCar('yellow', !yellow))}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default Cars
