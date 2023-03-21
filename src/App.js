
import { HashRouter as HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import PollenAPI from './utils/pollenAPI';
import AirAPI from './utils/airAPI';
import AQI from './components/AirQualityIndexPage/AQI';
import PollenTypes from './components/PollenTypesPage/PollenTypesPage';
import React from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <React.StrictMode>

        <AirAPI />
        <PollenAPI />
        <HashRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AQI" element={<AQI />} />
            <Route exact path="/pollen_types" element={<PollenTypes />} />
          </Routes>
          <Footer/>
        </HashRouter>
      </React.StrictMode>

    </div>

  );
}

export default App;
