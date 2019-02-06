// action types
const CREATE_HOTSPOT = 'CREATE_HOTSPOT'
const DELETE_HOTSPOT = 'DELETE_HOTSPOT'
const CAPTURE_SPOT = 'CAPTURE_SPOT'
const CHANGE_TEXT = 'CHANGE_TEXT'

// initial state
const INITIAL_STATE = {
  hotspots: [],
  capturing: false,
}

// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_HOTSPOT:
      return {
        ...state,
        capturing: true
      }
    case DELETE_HOTSPOT:
      let newHotspots = [ ...state.hotspots ]
      newHotspots.splice(action.payload, 1)

      return {
        ...state,
        hotspots: newHotspots
      }
    case CAPTURE_SPOT:
      return {
        ...state,
        hotspots: [
          ...state.hotspots,
          {
            title: `Hotspot #${state.hotspots.length + 1}`,
            description: '',
            position: action.payload
          }
        ],
        capturing: false
      }
    case CHANGE_TEXT:
      return {
        ...state,
        hotspots: [
          ...state.hotspots.slice(0, action.payload.index),
          {
            ...state.hotspots[action.payload.index],
            [action.payload.field]: action.payload.value
          },
          ...state.hotspots.slice(action.payload.index + 1)
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

export const deleteHotspot = (hotspotIndex) => {
  return {
    type: DELETE_HOTSPOT,
    payload: hotspotIndex
  }
}

export const onCaptureClick = e => {
  const x = e.pageX - 10;
  const y = e.pageY - 10;

  return {
    type: CAPTURE_SPOT,
    payload: { x, y }
  }
}

export const onHotspotTextChange = (e, field, hotspotIndex) => {
  return {
    type: CHANGE_TEXT,
    payload: {
      value: e.target.value,
      field,
      index: hotspotIndex
    }
  }
}