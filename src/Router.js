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
        <Routes>
          {/* <Route exact={true} path="/" element={<Address />} /> */}

          <Route exact path="/" element={<AddTodoForm />} />
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/" element={<TotalCompleteItems />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
