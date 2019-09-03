import React from 'react';
import createStore from './redux';
import { Provider } from 'react-redux';
import RootContainer from './containers/RootContainer.js';

const store = createStore();

const App = () => {

  return (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
  );
};

export default App;
