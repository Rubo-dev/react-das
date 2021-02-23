import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state,{
  setName,
  setEmail,
  setText,
  subscribe} from './redux/store';

const reRender = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} setName={setName} setEmail={setEmail} setText={setText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
subscribe(reRender);
reRender (state);
reportWebVitals();
