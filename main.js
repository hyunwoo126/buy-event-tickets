console.log('main.js');
const app = document.getElementById('app');

const title = document.createElement('h1');
title.innerText = 'Buy Tickets to Events!';


const render = document.createElement('button');
render.innerText = 'render';

render.addEventListener('click', async () => {
  const { default: showAllEvents } = await import('./views/all-events.js');
  app.appendChild(showAllEvents());
});

app.append(title, render);

