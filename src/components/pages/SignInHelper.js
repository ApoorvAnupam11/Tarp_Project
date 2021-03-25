import { Link } from "react-router-dom";

function SignInHelper() {
    return (
    <div class="jumbotron jumbotron-fluid" style = {{'font-family': 'montserrat'}}>
      <div class="container">
      <h1 class="display-4 text-left">
      <i class="fas fa-exclamation-triangle"></i>
      &nbsp;
      UNDER CONSTRUCTION!
      </h1>
      <p class="lead">Check back after some time, the site is under construction :(</p>
      <br />
      <Link class="btn btn-lg btn-warning" to='/'>Back to Fred</Link>
      </div>
    </div>
    );
}

export default SignInHelper;