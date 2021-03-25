import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Recommend from './components/pages/Recommend';
import Thanks from './components/pages/thanks';
import SearchBar from './components/SearchBar';
import SignUpHelper from './components/pages/SignUpHelper';
import SignInHelper from './components/pages/SignInHelper';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/thanks' component = {Thanks} />
          <Route path='/sign-up-helper' component = {SignUpHelper} />
          <Route path='/sign-in-helper' component = {SignInHelper} />
          <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/recommend' component = {Recommend} />
          <Route path='/search' component = {SearchBar} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
