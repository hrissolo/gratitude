import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ApplicationViews } from './App';
import { GratitudeHouses } from './GratitudeHouses';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GratitudeHouses />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
