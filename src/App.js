import NavTabs from './components/Navtabs';
import { HashRouter as HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Pollen from './components/PollenPage/PollenPage';
import Air from './components/AirPage/AirPage';
import AQI from './components/AirQualityIndexPage/AQI';
import PollenTypes from './components/PollenTypesPage/PollenTypesPage';
import React from 'react';


function App() {
  return (
    <div>
      <React.StrictMode>
        <HashRouter>
          <NavTabs />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pollen" element={<Pollen />} />
            <Route exact path="/air" element={<Air />} />
            <Route exact path="/AQI" element={<AQI />} />
            <Route exact path="/pollen_types" element={<PollenTypes />} />
          </Routes>
        </HashRouter>
      </React.StrictMode>

    </div>

  );
}

export default App;
