import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const reRender = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state = {store._state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(reRender);
reRender (store._state);
reportWebVitals();