import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import Calculate from "./Calculate.js";
import Compare from "./Compare.js";

function App() {
  return (
	<div className="App">
		<div className="container">
			<header>
				<p className="display-2 text-center container-fluid">Earnings Calculator</p>
	  			<NavBar/>
			</header>
	  		<Routes>
	  			<Route path="/" element={<Homepage/>}/>
				<Route path="/calculate" element={Calculate/>}/>
	  			<Route path="/compare" element={<Compare/>}/>
	  		</Routes>
		</div>
	</div>
  );
}

export default App;
