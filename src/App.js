import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp='60' condition = 'Clear'/> 
      <WeatherCard temp='50' condition = 'Dust'/>
      
    </div>
  );
}

export default App;
