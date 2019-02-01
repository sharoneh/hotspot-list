// action types
const CREATE_HOTSPOT = 'CREATE_HOTSPOT'
const DELETE_HOTSPOT = 'DELETE_HOTSPOT'

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
    case DELETE_HOTSPOT:
      let newHotspots = [ ...state.hotspots ]
      newHotspots.splice(action.payload, 1)

      return {
        ...state,
        hotspots: newHotspots
      }
    default:
      return state
  }
}

// actions
export const createHotspot = () => {
  return { type: CREATE_HOTSPOT }
}

export const deleteHotspot = (hotspotIndex) => {
  return {
    type: DELETE_HOTSPOT,
    payload: hotspotIndex
  }
}