import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import Calculate from "./Calculate.js";
import Compare from "./Compare.js";
import React, { useRef } from "react";

function App() {
	const render = useRef(false);
  return (
	<div className="App">
		<div className="container">
			<header>
				<p className="display-2 text-center container-fluid">Earnings Calculator</p>
	  			<Navbar/>
			</header>
	  		<Routes>
	  			<Route path="/" element={<Homepage/>}/>
				<Route path="/calculate" element={<Calculate r={render}/>}/>
	  			<Route path="/compare" element={<Compare/>} r={render}/>
	  		</Routes>
		</div>
	</div>
  );
}

export default App;
