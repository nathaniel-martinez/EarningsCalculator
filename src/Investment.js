import React, { useState, useEffect } from "react";


const Investment = ({ value }) => {
	let [investment, setInvestment] = useState();

	const earningFunc = (val) => {
		val = val * 12;
		console.log("Value making it to sub section?: " + value.principal);
		return value.principal * Math.pow((1 + (value.apy/val)), ((value.lifespan / 12) * val));
	};

	const normalCalculation = () => {
		console.log("Made it to calc in INvetment tag?");
		console.log("In the INvestment component the value of te object is: " + Object.keys(value));
		let earnings;
		console.log("the value of accrue is " + value["accrue"]);
		switch(value["accrue"]){
			case "daily":
				console.log("made it here? to switch");
				earnings = earningFunc(30);
				break;
			case "weekly":
				earnings = earningFunc(4);
				break;
			case "bi-weekl":
				earnings = earningFunc(2);
				break;
			case "monthly":
				earnings = earningFunc(1);
				break;
			case "yearly":
				earnings = earningFunc(1/12);
				break;
			default:
				console.log("Accrue is not defined valid");
		}
		value["total"] = earnings;
		console.log(value["total"]);
		let newObj = { lifespan: value.lifespan, principal: value.principal,  accrue: value.accrue, total: value.total };
		localStorage.setItem(`${value.name}`, JSON.stringify(newObj))
		const removeEarning = () => {
			localStorage.removeItem(`${value.name}`);
		};

		return (
			<div>
				<span>LifeSpan: {value.lifespan}</span>	
				<span>Prinipal: {value.principal}</span>	
				<span>Accrue: {value.accrue}</span>	
				<span>Earnings: {value.total}</span>
				<button onClick={removeEarning}>Delete</button>
			</div>
		);
		
	};
	const addedCalculation = () => {
		
	};

	const fixedCalculation = () => {
		return normalCalculation();
	};

	useEffect(() => {
		if(value.hasOwnProperty("added")){
			setInvestment(addedCalculation());
		}
		else if (value.hasOwnProperty("addedRate")){
			console.err("Something is wrong here, added and addedRate exist bipolar to each other.");
		}
		else {
			setInvestment(fixedCalculation());
		}
	}, []);

	return (<li>{investment}</li>);
};

export default Investment;
