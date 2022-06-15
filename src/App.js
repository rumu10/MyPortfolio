import './App.css';
import 'antd/dist/antd.css';
import './colors.css';
import React from 'react';
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
