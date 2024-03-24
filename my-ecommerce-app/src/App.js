import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Ensure the path is correct. It might be './components/Homepage' if your folder is named 'components'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* more routes can be added here with the updated syntax */}
      </Routes>
    </Router>
  );
}

export default App;
