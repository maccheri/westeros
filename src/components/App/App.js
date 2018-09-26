import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Loader from '../../containers/Loader';
import Home from '../../containers/Home';
import Detail from '../../containers/Detail';
import NotFound from '../NotFound';

const App = () => 
  (
    <Router>
      <div>
        <Loader />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/detail/:id' render={() => <Detail />} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );


export default App;