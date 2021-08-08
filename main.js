import showAllEvents from './views/all-events.js';

console.log('main.js');
const app = document.getElementById('app');

const title = document.createElement('h1');
title.innerText = 'Buy Tickets to Events!';

app.appendChild(title);

app.appendChild(showAllEvents());
