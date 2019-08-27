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
})
