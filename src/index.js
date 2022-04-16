import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reducer, { initialState } from './state/reducer'
import { StateProvider } from './state/StateProvider';
import { ShowProvider } from './SomeContext/SomeContext'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer} >
    <BrowserRouter>
      <ShowProvider>
        <App />
      </ShowProvider>
    </BrowserRouter>
  </StateProvider>,
);

reportWebVitals();
