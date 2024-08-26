// Constants for Form Div, Result Div and Calculate Button
const form = document.getElementById("form");
const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate-button");

// Constants for Skill, Resource, Time, Luck, Support Inputs
const skill = document.getElementById("skill");
const resource = document.getElementById("resource");
const time = document.getElementById("time");
const luck = document.getElementById("luck");
const support = document.getElementById("support");

// Calculate Function
// Getting Values of all Inputs
function calculate() {
	let skillVal = validate(parseInt(skill.value), 0, 100);
	let resourceVal = validate(parseInt(resource.value), 0, 100);
	let timeVal = validate(parseInt(time.value), 0, 100);
	let luckVal = validate(parseInt(luck.value), 1, 10);
	let supportVal = validate(parseInt(support.value), 1, 100);

	let resultVal = successPercent(skillVal, resourceVal, timeVal, luckVal, supportVal);

	// Showing the results
	result.textContent = `Your success percentage is ${resultVal}%`;
	form.classList.add('hidden');
	result.classList.remove('hidden');

	if (resultVal >= 50)
		result.style.color = `rgb(0, 255, 0)`;
	else
		result.style.color = `rgb(255, 0, 0)`;
}

// Validate Function
// Checking if all the values are in a specified range
function validate(value, min, max) {
	if (value >= min && value <= max) {
		return value;
	} else {
		return null;
	}
}

// Calculating the Percentage
function successPercent(val1, val2, val3, val4, val5) {
	let percentage = (val1 + val2 - val3 + val4 + val5) / 310 * 100;
	return percentage;
}

// Event Listener for The Calculate Button
calculateButton.addEventListener('click', calculate);
