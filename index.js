// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const header = document.createElement('h1');
appDiv.appendChild(header);
header.innerHTML = 'Item Counter';

const subHeader = document.createElement('h2');
appDiv.appendChild(subHeader);
subHeader.innerHTML = 'You have:';

const ul = document.createElement('ul');
appDiv.appendChild(ul);

var startItems = [
  'Bottle of Dirty Water',
  'Bottle of Clean Water',
  'Bottle of Clean Water',
  'Energy Bar',
  'Bandages',
  'Walking Stick',
  'Match',
  'Match',
  'Match',
  'Tea Leaves',
  'Cooking Set',
  'Silver',
  'Silver',
  'Silver',
  'Clothing',
];

var count = {};
startItems.forEach((i) => {
  count[i] = (count[i] || 0) + 1;
});

for (const [key, value] of Object.entries(count)) {
  const li = document.createElement('li');
  li.innerHTML = `${value} x ${key}`;
  ul.appendChild(li);
}
