import React, { useState, useEffect } from "react";

function Compare({ r }){
	const [iList, setIlist] = useState([]); 
	useEffect(() => {
		console.log("local storage: " + localStorage);
		for(let i = 0; i < localStorage.length; i++){
			const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
			console.log("The value of value is: " + value);
			setIlist([...iList, <div className="border">
				<span>LifeSpan: {value["lifespan"]}</span>	
				&nbsp;
				&nbsp;
				<span>Prinipal: {value["principal"]}</span>	
				&nbsp;
				&nbsp;
				<span>Accrue: {value["accrue"]}</span>	
				&nbsp;
				&nbsp;
				<span>Earnings: {value["total"]}</span></div>]);
		}
	}, [r]);

	return(
		<div>
			<h1>Your Investments is: </h1>
			<br/>
			<br/>
			<br/>
			<br/>
			<ul>{iList}</ul>
		</div>
	);
}

export default Compare;
