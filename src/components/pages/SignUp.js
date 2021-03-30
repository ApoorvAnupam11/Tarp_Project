import React from "react";
import "../../App.css";
import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";
import "../../App.css";

function SignUp() {
  return (
    <div>
      <form class="form-signin" action="/thanks" method="post">
        <h1 class="h4 mb-3 font-weight-normal">Create an Account</h1>
        <input
          type="text"
          class="form-control top"
          placeholder="Username"
          name="username"
          required
          autoFocus
        />
        <input
          type="email"
          class="form-control middle"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          class="form-control bottom"
          placeholder="Password"
          name="password"
          required
        />
        <Link
          to="/sign-up-helper"
          class="btn btn-lg btn-dark btn-block"
          type="submit"
        >
          Continue
        </Link>
        <small id="signInHelpBlock" class="form-text text-muted">
          <Link to="/sign-in">Already have an account?</Link>
        </small>
      </form>
      <p class="mt-5 mb-3 text-muted text-center">&copy; Fred</p>
      <Footer />
    </div>
  );
}

export default SignUp;
