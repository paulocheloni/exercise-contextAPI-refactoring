import React, { useState } from 'react';
import TrafficContext from './TrafficContext';


function TrafficProvider({children}) {
  const [signalColor, changeSignal] = useState('red');


  return (
    <TrafficContext.Provider value={{ signalColor, changeSignal}} >
      {children}
    </TrafficContext.Provider>
  )

}

export default TrafficProvider

