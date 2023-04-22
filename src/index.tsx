import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import App from './App';
import { pokemonsReducer } from './reducers/pokemons';
import { logger, pokedexIndex } from './middlewares';

const composeEnhancers = compose(applyMiddleware(logger, pokedexIndex), devToolsEnhancer({}));
const store = createStore(pokemonsReducer, composeEnhancers);

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
