import React, { useContext } from 'react';
import TrafficContext from './context/TrafficContext'
import greenSignal from './images/greenSignal.jpeg'
import redSignal from './images/redSignal.jpeg'
import yellowSignal from './images/yellowSignal.jpeg'


function TrafficSignal() {
  const { signalColor, changeSignal} = useContext(TrafficContext)

  const signals = {
    'green': greenSignal,
    'yellow': yellowSignal,
    'red': redSignal
  }

  return (
    <>
      <img src={signals[signalColor]} className='signal-img' alt="trafficSignal" />
      <button onClick={() => changeSignal('green')}>green</button>
      <button onClick={() => changeSignal('yellow')}>yellow</button>
      <button onClick={() => changeSignal('red')}>red</button>

    </>
  )
}

export default TrafficSignal