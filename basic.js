	/*

	Basics of JavaScript
	Author: Yvonne
	Version: 0.0.1
	On: August 3, 2018 | Off: 

	*/

	// querySelector 

	var myHeading = document.querySelector('h1');
	myHeading.textContent = "Testing out the Query Selector";

	// end querySelector

	// Events 


	document.querySelector('h1').onclick = function() {
		alert('You poked me!');
	}

	 var myH1 = document.querySelector('h1');
	 myH1.onclick = function() {
	 	alert('You poked me!');
	 }

	// JavaScript Basic Conditions

	var b = false;
	var a;
	var c = 10;
		if (b) {
		    a = 'no';
		} else {
		    a = 'yes';
		}

	function myCheck(age, country) {
	    var response;
	    if (country == "USA") { 
	    	response = age > 21 ? true : false; // ternary operator, like if-else
	    } else if(country == "Canada") {
	    	response = age > 18 ? true : false;
	    } else {
	    	response = false;
	    }
	    return response;
	}

	var d = (b > c) ? true : 'false';

	// end here

	// JavaScript Loops

    // for loop

	for (x = 0; x < 10; x++) { // declaration; condition; increment / decrement
		console.log ('Hello ' + (x + 1)) // output
	}

	// while loop

	var q = 1; // declaration
	while (q < 20) { // condition
		console.log('Number ' + q); // output
		q++; // increment / decrement
	}

	// do..while loop

	var w = 20;

	do {
		console.log('W value ' +w);
		w++;
	}
		while(w < 11);

