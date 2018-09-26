import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Loader from '../../containers/Loader';
import Home from '../../containers/Home';
import House from '../../containers/House';
import NotFound from '../NotFound';

const App = () => 
  (
    <Router>
      <div>
        <Loader />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/house/:id' render={() => <House />} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );


export default App;