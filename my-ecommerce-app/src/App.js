import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Ensure the path is correct. It might be './components/Homepage' if your folder is named 'components'
import Productpage from './component/Productpage'; // Import the Productpage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </Router>
  );
}

export default App;
