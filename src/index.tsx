import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import App from './App';
import { pokemonsReducer } from './reducers/pokemons';

const store = createStore(pokemonsReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
