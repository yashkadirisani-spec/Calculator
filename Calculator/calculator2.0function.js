


function sum(numInput) {

	if (numInput == '=') {
		let Check = (document.getElementById('content').value);
		content.value = (eval(Check));
		return;
	}

	if (numInput == 'AC') {
		content.value = 0;
		return;
	}

	if (numInput == '--') {
		content.value = content.value.slice(0,-1);
		return;
	}

	content.value += numInput;

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


