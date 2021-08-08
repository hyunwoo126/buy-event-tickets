import { state } from '../store.js';

export default {
  buy: (id) => {
    // in production, this would be a server call instead of direct store change
    const event = state.events.find((event) => event.id === id);
    event.sold++;
    console.log(event);
  },
  post: () => {},
};

