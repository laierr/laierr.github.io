'use strict';

var digits = {
	0: "efes",
	1: "ehad",
	2: "shtaim",
	3: "shelosh",
	4: "arba",
	5: "hamesh",
	6: "shesh",
	7: "sheva",
	8: "shmone",
	9: "teisha"
};

var tens = {
	1: "eser",
	2: "esrim",
	3: "shloshim",
	4: "arbaim",
	5: "hameshim",
	6: "shishim",
	7: "shevim",
	8: "shmonim",
	9: "teshim"
};

var hundreds = {
	1: "mea",
	2: "mataim",
	3: "shlosh meot",
	4: "arba meot",
	5: "hamesh meot",
	6: "shesh meot",
	7: "shva meot",
	8: "shmona meot",
	9: "tsha meot"
};

var numberToText = function (num) {
	var array = num.toString().split('').map(function (i) { return  parseInt(i); });

	if (array.length === 1) {
		return digits[array[0]]
	} else if (array.length === 2) {
		return tensToText(array[0],array[1])
	} else if (array.length === 3) {
		return hundredsToText(array[0], array[1], array[2])
	};

};

var tensToText = function (ten, digit) {
	
	if (digit === 0) { //tens precise
		return tens[ten];
	} else if (ten === 1) { //ten case
		return digits[digit] + "esre";
	} else if (ten === 0) { 
		return "ve" + digits[digit];
	};
	
	return tens[ten] + " ve" + digits[digit];
};


var hundredsToText = function (hundred, ten, digit) {
	if (ten === 0 && digit === 0 ) { // hundreds precise
 		return hundreds[hundred];
	}; 
	return hundreds[hundred] + (ten === 1 || digit === 0 ? " ve" : " ") + tensToText(ten, digit);
};

if (typeof exports === "undefined") {
	var exports = {};
	window.hebrewNumbers = exports;
};

exports.numberToText = numberToText;

