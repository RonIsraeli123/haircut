import React from 'react';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Login from './components/Pages/Login/Login';
import Appointment from './components/Pages/Appointment/Appointment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './components/General/ScrollToTop';

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
