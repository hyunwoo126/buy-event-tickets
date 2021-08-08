import { getters } from '../store.js';
import renderEventCard from '../components/event-card.js';


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

