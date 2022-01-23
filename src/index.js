import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
// 리액트 프로젝트에 리덕스를 주입해줄 프로바이더를 불러옴!
import { Provider } from 'react-redux';
// 연결할 스토어.
import store from './redux/store';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
