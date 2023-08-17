import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
	const navigate = useNavigate();
	
	const leaveHome = () => {
		navigate("/calculate");
	}

  return (
	  <div className="container-fluid">
	  	<p>{"Welcome to my Earnings Calculator! Use this calculator to find the returns on your investments"}</p>
	  	<div><button onClick={leaveHome}>Get Started!</button></div>
	  </div>
  );
}

export default Homepage;
