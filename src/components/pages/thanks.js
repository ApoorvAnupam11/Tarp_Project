import { Link } from "react-router-dom";

function Thanks() {
    return (
    <div class="jumbotron jumbotron-fluid" style = {{'font-family': 'montserrat'}}>
      <div class="container">
      <h1 class="display-4 text-left">Thank You!</h1>
      <p class="lead">Your contribution is invaluable to us and the millions you are helping :)</p>
      <Link class="btn btn-lg btn-danger" to='/'>Back to Fred</Link>
      </div>
    </div>
    );
}

export default Thanks;