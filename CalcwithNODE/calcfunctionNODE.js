

let firstNum = null;
let PeOperator = null;

function sum(numInput) {


if (numInput == '+'|| numInput == '-' || numInput == '*' || numInput == '/') {
	firstNum = Number(content.value);
	PeOperator = numInput;
	content.value += numInput;

	return;

}




	if (numInput == '=') {
		let secondNum = Number(content.value.split(PeOperator).pop());
		CalcServer(firstNum, secondNum, PeOperator);
		return;
	} 

	if (numInput == 'AC') {
		content.value = '';
		firstNum = null;
		PeOperator = null;

		return;

		
	}

	if (numInput == '--') {
		content.value = content.value.slice(0,-1);
		return;
	}

	content.value += numInput;

}


function CalcServer(num1, num2, PeOperator) {
	let urlArithmetic = encodeURIComponent(PeOperator);
	fetch(`http://localhost:3000/calculate?num1=${num1}&num2=${num2}&operator=${urlArithmetic}`)
.then(response=>response.text())
		.then(result=> {content.value=result});

}		


function colorSwitch() {


document.querySelector('.Calcu').classList.toggle('colorSwitch');

	//element.classList.toggle();
}


function androidColor() {

let theme = document.getElementById('theme');
 	theme.setAttribute("href", "calc2.0stylesheetandroid.css")

	//element.classList.toggle();
}

function appleColor() {
	let theme = document.getElementById('theme');
	theme.setAttribute("href", "calc2.0stylesheet.css")
}

//console.log(sum(30,32,34,43));


//sum = document.getElementById('content');


