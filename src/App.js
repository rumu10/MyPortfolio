import './App.css';
import 'antd/dist/antd.css';
import './colors.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import NavBar from './components/Nav/Nav';
import MainContent from './MainContent/MainContent';

function App() {
  return (
    <div>
      <MainContent/>
      {/* <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
