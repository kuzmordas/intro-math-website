function getElementByClass(name) {
	return document.getElementsByClassName(name)[0];
}

let menuItems = Array.from(document.getElementsByClassName('svg-navbar__menu-item'))
  .sort((a, b) => b.y.baseVal[0].value - a.y.baseVal[0].value);

let pointer = getElementByClass('svg-navbar__pointer');
let path = getElementByClass('svg-navbar__quadratic');
let curveLength = path.getTotalLength();

let params = {
	0: 0.22,
	1: 0.41,
	2: 0.60,
	3: 0.76
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
	menuItems[i].addEventListener('click', () => {
		var e =	document.getElementById(`item-${i + 1}`);
		if (e) e.checked = true;
	});
}


let i = 0;
const headerText = 'provide Math to your Business';
textElement = document.getElementById('header-text');

function typeWriter() {
  if (i === headerText.length) return;
  textElement.innerHTML += headerText.charAt(i);
  i++;
  setTimeout(typeWriter, 100);
}

setTimeout(typeWriter, 100);

const sections = [
  'about-us',
  'what-we-can',
  'our-projects',
  'team'
];

function onActiveSectionChange(name) {
  sections.forEach(x => {
    const e = document.getElementById(x);
    (x !== name)
      ? e.classList.add('hidden')
      : e.classList.remove('hidden')
  });
}

sections.forEach(x => {
  const e = document.getElementsByName(x)[0];
  e.addEventListener('click', () => onActiveSectionChange(x));
});

const members = [
  'member-1',
  'member-2',
  'member-3'
];

function onActiveMemberChange(name) {
	members.forEach(x => {
	  const e = document.getElementById(x);
	  (x !== name)
		? e.classList.add('hidden')
		: e.classList.remove('hidden')
	});
  }

members.forEach(x => {
  const e = document.getElementsByName(x)[0];
  e.addEventListener('click', () => onActiveMemberChange(x));
});