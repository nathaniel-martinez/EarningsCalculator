import React, { useState, useRef, useEffect } from "react";
import Investment from "./Investment.js";

function Calculate(){
	const [calcType, setCalcType] = useState("");
	const [investments, setInvestments] = useState([]);

	const radioParse = (e) => {
		console.log("the value of the radio button" + e.value);
		setCalcType(e.value);
	};

	const calculateEarnings = (e) => {
		console.log("Made it to calculateEarnings?");
		e.preventDefault();

		const dataObj = Array.from(e.target.elements)
				.filter((e)=>{
					if(e.name !== "" && e.value !== ""){
						return true;
					}
					else {
						return false;
					}
				})
				.reduce((acc, item) => {
					acc[item.name] = item.value;
					return acc;
				});
		console.log("Data obj: " + Object.keys(dataObj));
		setInvestments([...investments, <Investment value={dataObj}/>]);
	};

	const fixedPrinciple = () => {
		return(
			<form onSubmit={calculateEarnings} className="container">
				<div className="row">
					<div className="col"><label htmlFor="nameInput">{"Name of Investment"}</label></div>
					<div className="col"><label htmlFor="lifeInput">{"Lifetime of Investment in Months"}</label></div>
					<div className="col"><label htmlFor="principalInput">{"Starting Principal of Investment"}</label></div>
					<div className="col"><label htmlFor="apyInput">{"APY"}</label></div>
					<div className="col"><label htmlFor="accrueInput">{"Accrue rate of Investment"}</label></div>
			{/*<div className="col"><label htmlFor="compoundInput">{"Compound rate of investment"}</label></div>*/}
				</div>
				<div className="row">
					<div className="col"><input type="text" name="name" id="nameInput" required/></div>
					<div className="col"><input type="number" min="1" name="lifespan" id="lifeInput" required/></div>
					<div className="col"><input type="number" step="any" name="principal" id="principalInput" required/></div>
					<div className="col"><input type="number" step="any" name="apy" id="apyInput" required/></div>
					<div className="col">
						<select name="accrue" id="accrueInput" required>
							<option value="daily">Daily</option>
							<option value="weekly">weekly</option>
							<option value="bi-weekly">Bi-Weekly</option>
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
						</select>
					</div>
					{/*<div className="col">
						<select name="compound" id="compoundInput" required>
							<option value="daily">Daily</option>
							<option value="weekly">weekly</option>
							<option value="bi-weekly">Bi-Weekly</option>
							<option value="monthly">Monthly</option
							<option value="yearly">Yearly</option>
							<option value="none">None</option>
						</select>
					</div>*/}
				</div>
				<div className="row"><div className="col"><button type="submit">Calculate Earnings</button></div></div>
			</form>
		);
	};

	const continousPrinciple = () => {
		return(
			<form onSubmit={calculateEarnings} className="container">
				<div className="row">
					<div className="col"><label htmlFor="lifeInput">{"Lifetime of Investment in Months"}</label></div>
					<div className="col"><label htmlFor="principalInput">{"Starting Principal of Investment"}</label></div>
					<div className="col"><label htmlFor="accrueInput">{"Accrue rate of Investment"}</label></div>
					<div className="col"><label htmlFor="compoundInput">{"Compound rate of Investment"}</label></div>
				</div>
				<div className="row">
					<div className="col"><input type="number" min="1" name="lifespan" id="lifeInput" required/></div>
					<div className="col"><input type="number" step="any" name="principle" id="principalInput" required/></div>
					<div className="col">
						<select name="accrue" id="accrueInput" required>
							<option value="daily">Daily</option>
							<option value="weekly">weekly</option>
							<option value="bi-weekly">Bi-Weekly</option>
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
						</select>
					</div>
					<div className="col">
						<select name="compound" id="compoundInput">
							<option value="daily">Daily</option>
							<option value="weekly">weekly</option>
							<option value="bi-weekly">Bi-Weekly</option>
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col"><label htmlFor="addedInput">How much money will you add?</label></div>
					<div className="col"><label htmlFor="addedRateInput"></label></div>
				</div>
				<div className="row">
					<div className="col"><input type="number" step="any" name="added" id="addedInput" required/></div>
					<div className="col">
						<select name="addedRate" id="addedRateInput">
							<option value="daily">Daily</option>
							<option value="weekly">weekly</option>
							<option value="bi-weekly">Bi-Weekly</option>
							<option value="monthly">Monthly</option>
							<option value="yearly">Yearly</option>
						</select>
					</div>
				</div>
				<div className="row"><div className="col"><button type="submit">Calculate Earnings</button></div></div>
			</form>
		);
	};

/*	let response;
	useEffect(() => {
		if(calcType == ""){
			//response = () => {return(<div></div>);};
			console.log("Reached here");
			response = () => {fixedPrinciple()};
		}
		else if(calcType == "fixed"){
			response = () => {fixedPrinciple()};
		}
		else if(calcType == "continous"){
			response = () => {continousPrinciple()};
		}
	}, [calcType]);
*/

	return (
		<div>
			{/*<form
			>
				<p>Will you add more money to the investment during its lifetime?</p>
				<input type="radio" name="calcType" value="continous" onClick={radioParse} id="continous-radio"/>
				<label htmlFor="continous-radio">Yes</label>
				<br/>
				<input type="radio" name="calcType" value="fixed" onClick={radioParse} id="fixed-radio"/>
				<label  htmlFor="fixed-radio">No</label>
			</form>*/}
			<div>{fixedPrinciple()}</div>
			<ul>{investments}</ul>
		</div>
	);
}

export default Calculate;
