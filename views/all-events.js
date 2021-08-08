import { getters } from '../store.js';
import transactApi from '../api/transact.js';

const renderEventCard = ({ id, name, total, sold }) => {
  const nameElem = document.createElement('h2');
  nameElem.innerText = name;

  const availableElem = document.createElement('div');
  availableElem.innerText = `available: ${total - sold}`;

  const buyElem = document.createElement('button');
  buyElem.innerText = 'buy now';
  buyElem.classList.add('button-buy');
  buyElem.setAttribute('data-id', id);
  buyElem.addEventListener('click', (event) => {
    transactApi.buy(Number(event.target.dataset.id));
  });

  const elem = document.createElement('div');
  elem.classList.add('event-card');

  elem.append(
    nameElem,
    availableElem,
    buyElem,
  );
  return elem;
};

const showAllEvents = () => {
  const elem = document.createElement('div');
  const events = [];
  for (const event of getters.getAvailableEvents()) {
    events.push(renderEventCard(event));
  }
  elem.append(...events);
  return elem;
};

export default showAllEvents;

