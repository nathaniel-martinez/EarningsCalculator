import { Link } from "react-router-dom";

function Navbar() {
  return (
	  <div className="container">
	  	<div className="row bg-light">
	  		<div className="col-sm border view overlay">
	  			<Link to="/calculate" className="text-decoration-none reset-color">Calculate Earnings</Link>
	  			<div className="mask flex-center border rgba-blue-light"></div>
	  		</div>
	  		<div className="col-sm view overlay">
	  			<Link to="/compare" className="text-decoration-none reset-color">Compare Earnings</Link>
	  			<div className="mask flex-center border rgba-blue-light"></div>
	  		</div>
	  	</div>
	  </div>
  );
}

export default Navbar;
