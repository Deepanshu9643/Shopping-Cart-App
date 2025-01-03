import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyCartPage from './pages/MyCartPage';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/cart">Cart Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<MyCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
