import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp='60'/>
           
      <WeatherCard temp='00'/>
      
    </div>
  );
}

export default App;
