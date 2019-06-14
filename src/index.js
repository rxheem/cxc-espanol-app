import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css/normalize.css';
import 'animate.css';
import 'bulma/css/bulma.css';
import './index.css';

// Bootstrap essentials
/* Grid*/ import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
