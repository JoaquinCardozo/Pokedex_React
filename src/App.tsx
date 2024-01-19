import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Pokemons, Pokemon } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Pokemons />} />
          <Route path="/pokemons" element={ <Pokemons />} />
          <Route path="/pokemons/:name" element={ <Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
