import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
// import { BrowserRouter } from 'react-router-dom';
import CurrentFires  from './containers/CurrentFires/CurrentFires';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevTools);

ReactDOM.render(
<Provider store={store}>
  {/* <BrowserRouter> */}
    <CurrentFires />
  {/* </BrowserRouter > */}
</Provider>, document.getElementById('root'));
