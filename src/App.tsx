import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Tickets from './components/Tickets/Tickets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
