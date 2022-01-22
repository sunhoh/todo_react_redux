import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
// import Address from './pages/Address';
import AddTodoForm from './pages/AddTodoForm';
import TodoList from './pages/TodoList';
import TotalCompleteItems from './pages/TotalCompleteItems';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          style={{
            // margin: `300px`,
            // display: 'flex',
            textAlign: 'center',
            padding: '10px',
            fontSize: '20px',
            border: `1px solid black`,
          }}
        >
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
          <Routes>
            {/* <Route exact={true} path="/" element={<Address />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
