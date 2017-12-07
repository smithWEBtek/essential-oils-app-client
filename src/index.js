import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import OilForm from './containers/OilForm';
import OilsIndex from './containers/OilsIndex';
import OilShow from './containers/OilShow';
import Navbar from './components/Navbar';

import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" render={ Home } />
            <Route exact path="/oils" component={ OilsIndex } />
            <Route exact path="/oils/new" component={ OilForm } />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();