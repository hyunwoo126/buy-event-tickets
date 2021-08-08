const state = {
  events: [
    {
      id: 1,
      name: 'event 1',
      total: 100,
      sold: 13,
    },
    {
      id: 2,
      name: 'event 2',
      total: 50,
      sold: 48,
    },
    {
      id: 3,
      name: 'sold out event',
      total: 100,
      sold: 100,
    },
  ],
};

const getters = {
  getAvailableEvents: function() {
    return state.events.filter(event => event.total > event.sold);
  },
};

export {
  state,
  getters,
};

