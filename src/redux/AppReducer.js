// action types
const CREATE_HOTSPOT = 'CREATE_HOTSPOT'

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
    case CREATE_HOTSPOT:
      return {
        ...state,
        hotspots: [
          ...state.hotspots,
          {
            title: `Hotspot #${state.hotspots.length + 1}`,
            description: ''
          }
        ]
      }
    default:
      return state
  }
}

// actions
export const createHotspot = () => {
  return { type: CREATE_HOTSPOT }
}