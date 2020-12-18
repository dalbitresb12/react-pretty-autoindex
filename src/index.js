import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/base.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
