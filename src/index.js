import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ApplicationViews } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApplicationViews />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
