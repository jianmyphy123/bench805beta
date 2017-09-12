import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import rootReducer from './rootReducer';
import App from './App';
import { setCurrentUser } from './actions/authActions';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

if(localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
