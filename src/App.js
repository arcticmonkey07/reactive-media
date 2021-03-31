import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './redux/index';
import thunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Wrapper from './Components/Wrapper/Wrapper';

const App = () => {
  const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return (
    <HashRouter>
      <Provider className='App' store={store}>
        <Wrapper />
      </Provider>
    </HashRouter>
  );
}

export default App;
