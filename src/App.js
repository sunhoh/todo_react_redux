import store from './redux/store';
import { Provider } from 'react-redux';
import Main from './pages/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
