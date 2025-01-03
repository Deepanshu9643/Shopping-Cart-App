import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyCartPage from './pages/MyCartPage';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<MyCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
