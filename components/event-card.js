import transactApi from '../api/transact.js';

const renderEventCard = ({ id, name, total, sold }) => {
  const eventCard = document.createElement('div');
  eventCard.id = `event-card-${id}`;
  eventCard.classList.add('event-card');

  const nameElem = document.createElement('h2');
  nameElem.innerText = name;

  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'x';
  toggleButton.addEventListener('click', () => {
    eventCard.classList.toggle('hide-card');
  });

  const availableElem = document.createElement('div');
  availableElem.innerText = `available: ${total - sold}`;

  const buyElem = document.createElement('button');
  buyElem.innerText = 'buy now';
  buyElem.classList.add('button-buy');
  buyElem.setAttribute('data-id', id);
  buyElem.addEventListener('click', (event) => {
    transactApi.buy(Number(event.target.dataset.id));
  });

  eventCard.append(
    toggleButton,
    nameElem,
    availableElem,
    buyElem,
  );
  return eventCard;
};

export default renderEventCard;

