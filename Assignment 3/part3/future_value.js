"use strict";

while (true) {
	
	// get investment amount - loop until user enters a number
	let investment = 0;
	do {
    	investment = parseFloat(
        	prompt("Enter investment amount as xxxxx.xx", 10000));
	}
	while ( isNaN(investment) );

	// get interest rate - loop until user enters a number
	let rate = 0;
	do {
    	rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
	}
	while ( isNaN(rate) );

	// get number of years - loop until user enters a number
	let years = 0;
	do {
    	years = parseInt(prompt("Enter number of years", 10));
	}
	while ( isNaN(years) );
	
	document.write(`<p>Investment amount = ${investment} Interest rate = ${rate} Years = ${years} </p>`)

	// calulate future value
	let futureValue = investment;
	for (let i = 1; i <= years; i++ ) {
    		futureValue = futureValue + (futureValue * rate / 100);

		// display results
		document.write(`<p>Year=${i} Interest=${(futureValue-investment).toFixed(2)} Value=${futureValue.toFixed(2)}</p>`);
	}

    	// Ask if they want to continue
    	let shouldContinue = prompt("Do you want to enter another input? (y/n)");
 	if (!shouldContinue || shouldContinue.toLowerCase() !== "y") {
	break;
	}
}
