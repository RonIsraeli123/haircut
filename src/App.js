import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Footer, ScrollToTop } from './components/General';
import {
  Home,
  About,
  Projects,
  Login,
  Appointment,
  Verify,
  Tors,
} from './components/Pages';

import './style/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLog, setIsLog] = useState(false);
  const [userTors, setUserTors] = React.useState([]);

  return (
    <Router>
      <div className='App' id={'scroll'}>
        <Navbar isLog={isLog} setIsLog={setIsLog} />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Projects} />
          <Route path='/login' component={Login} />
          <Route
            path='/appointment'
            component={() => (
              <Appointment userTors={userTors} setUserTors={setUserTors} />
            )}
          />
          <Route
            path='/verify'
            component={() => <Verify setIsLog={setIsLog} />}
          />
          <Route
            path='/tors'
            component={() => (
              <Tors userTors={userTors} setUserTors={setUserTors} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
