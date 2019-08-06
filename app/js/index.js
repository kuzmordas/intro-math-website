function getElementByClass (className) {
    return document.getElementsByClassName(className)[0];
}

let aboutMeRef = document.getElementById('blog');
let learningRef = document.getElementById('learning');
let contactsRef = document.getElementById('contacts');

aboutMeRef.addEventListener('click', () => {
	let timerID = setInterval(function() {
		window.scrollBy(0, 10);
		if( window.pageYOffset >= 720)
			clearInterval(timerID);
	}, 1);
});

learningRef.addEventListener('click', () => {
	let timerID = setInterval(function() {
		window.scrollBy(0, 10);
		if( window.pageYOffset >= 1000)
			clearInterval(timerID);
	}, 1);
});

contactsRef.addEventListener('click', () => {
	let timerID = setInterval(function() {
		window.scrollBy(0, 10);
		if( window.pageYOffset >= 1100)
			clearInterval(timerID);
	}, 1);
});




let menuItems = Array.from(document.getElementsByClassName('header__menu-item'));
let pointer = getElementByClass('header__pointer');
let path = getElementByClass('header__quadratic');
let curveLength = path.getTotalLength();

let params = {
	0: 0.70,
	1: 0.53,
	2: 0.32
}

let counter = 0.0;
let direction = true;
let param = 0.0;

function movePoint() {
	if (direction) {
		if (counter < param) {
			counter += 0.015;
			pointer.setAttribute("cx", path.getPointAtLength(counter * curveLength).x);
			pointer.setAttribute("cy", path.getPointAtLength(counter * curveLength).y);
		}
	} else if (counter > param) {
		counter -= 0.015;
		pointer.setAttribute("cx", path.getPointAtLength(counter * curveLength).x);
		pointer.setAttribute("cy", path.getPointAtLength(counter * curveLength).y);
	}
}

setInterval(() => movePoint(), 20);

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('mouseover', () => {
		direction = (params[i] > counter) ? true : false;
		param = params[i];
	});
	menuItems[i].addEventListener("mouseout", () => {
		direction = false;
		param = 0.0;
	});
}