import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './AppRouter';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
