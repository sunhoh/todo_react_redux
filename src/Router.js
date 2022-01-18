import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import store from './redux/store';
import { Provider } from 'react-redux';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
