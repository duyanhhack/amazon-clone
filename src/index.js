import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reducer, { initialState } from './state/reducer'
import { StateProvider } from './state/StateProvider';
import { ShowProvider } from './SomeContext/SomeContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer} >
    <BrowserRouter>
      <ShowProvider>
        <App />
      </ShowProvider>
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);

reportWebVitals();
