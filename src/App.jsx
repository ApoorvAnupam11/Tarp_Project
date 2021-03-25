import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Recommend from './components/pages/Recommend';
import Thanks from './components/pages/thanks';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/thanks' component = {Thanks} />
          <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/recommend' component = {Recommend} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
