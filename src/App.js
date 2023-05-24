import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Footer, ScrollToTop } from './components/General';
import {
  Home,
  About,
  Projects,
  Login,
  Appointment,
  Verify,
} from './components/Pages';

import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App' id={'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Projects} />
          <Route path='/login' component={Login} />
          <Route path='/appointment' component={Appointment} />
          <Route path='/verify' component={Verify} />
          <Route path='/barberDetails' component={Verify} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
