import { Link } from "react-router-dom";

function Navbar() {
  return (
	  <div className="container">
	  	<div className="row">
	  		<div className="col-sm"><Link to="/calculate">Calculate Earnings</Link></div>
	  		<div className="col-sm"><Link to="/compare">Compare Earnings</Link></div>
	  	</div>
	  </div>
  );
}

export default Navbar;
