import React from 'react';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import '../../App.css';

function SignIn() {
  return (
  <div>
  <form class="form-signin" action="/thanks" method="post">
    <h1 class="h4 mb-3 font-weight-normal">Welcome Back!</h1>
    <input type="email" class="form-control top" placeholder="Email"name="email" required autoFocus/>
    <input type="password" class="form-control bottom" placeholder="Password" name="password" required />
    <Link to= "/sign-in-helper"class="btn btn-lg btn-dark btn-block" type="submit">Sign in</Link>
    <small id="signInHelpBlock" class="form-text text-muted">
    Need an account?&nbsp;&nbsp;
    <Link to="/sign-up"> Register</Link>
    </small>
  </form>
  <p class="mt-5 mb-3 text-muted text-center">&copy; Fred</p>
  <Footer />
  </div>
  )
}

export default SignIn;