import React from 'react';
import Navbar from './components/General/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Login from './components/Login/Login';
import Footer from './components/General/Footer';
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
