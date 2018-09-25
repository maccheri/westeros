import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Loader from '../loader';
import Home from '../home';

const App = () => 
  (
    <Router>
      <div>
        <Loader />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            {/* <Route path='/login' render={() => <Login exhibition="login" />} /> */}
            {/* <Route path='/register' render={() => <Login exhibition="register" />} /> */}
            {/* <Route path='*' component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );


export default App;