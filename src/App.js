import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Address from './pages/Address';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
