import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Address from './pages/Address';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
