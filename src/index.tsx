import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from '@redux-devtools/extension';
import 'antd/dist/reset.css';

import App from './App';
//import { pokemonsReducer } from './reducers/pokemons';
import rootReducer from './reducers/rootReduces';
//import { pokedexIndex } from './middlewares';

const composeEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer({}));
const store = createStore(rootReducer, composeEnhancers);

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
