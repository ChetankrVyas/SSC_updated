import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js";
import Team from './components/Team.js'
import Event from "./components/Events.js"
import SPC from "./components/Spc.js"
import KU from "./components/Ku.js"
import HHC from "./components/HHC.js"
import Sahyog from "./components/Sahyog.js"
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/spc" element={<SPC />} />
          <Route exact path="/ku" element={<KU />} />
          <Route exact path="/sahyog" element={<Sahyog />} />
          <Route exact path="/hhc" element={<HHC />} />
         
        </Routes>
      </Router>
    </div>
  );
}




