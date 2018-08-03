	var b = false;
	var a;
	if (b) {
	    a = 'no';
	} else {
	    a = 'yes';
	}

	function myCheck(age, country) {
	    var response;
	    if (country == "USA") { 
	    	response = age > 21 ? true : false; 
	    } else if(country == "Canada") {
	    	response = age > 18 ? true : false;
	    } else {
	    	response = false;
	    }
	    return response;
	}

	var d = (b > c) ? true : 'false';