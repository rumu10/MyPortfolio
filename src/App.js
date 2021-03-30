import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Home/Homepage';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/about" component = {About} />
            {/* <Route exact path="/resume" component={} /> */}
            {/* <Route render={() => <PageNotFound/>} /> */}
        </Switch>
    </Router>
  );
}

export default App;
