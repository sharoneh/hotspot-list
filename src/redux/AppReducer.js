// action types

// initial state
const INITIAL_STATE = {
  hotspots: [
    {
      title: 'Hotspot #1',
      description: ''
    },
    {
      title: 'Hotspot #2',
      description: ''
    },
    {
      title: 'Hotspot #3',
      description: ''
    },
  ]
}

// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// actions