import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
