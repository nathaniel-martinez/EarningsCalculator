import React from "react";
import { useHistory } from "react-router-dom";

function Homepage() {
	const history = useHistory();
	
	const leaveHome = () => {
		history.push("/calculate");
	}

  return (
	  <div className="container-fluid">
	  	<p>{"Welcome to my Earnings Calculator! Use this calculator to find the returns on your investments and to compare different investment options"}</p>
	  	<div><button onClick={leaveHome}>Get Started!</button></div>
	  </div>
  );
}

export default Navbar;
