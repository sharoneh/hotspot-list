// action types
const CREATE_HOTSPOT = 'CREATE_HOTSPOT'
const DELETE_HOTSPOT = 'DELETE_HOTSPOT'
const CAPTURE_SPOT = 'CAPTURE_SPOT'
const CHANGE_TEXT = 'CHANGE_TEXT'
const SAVE_TO_LOCALSTORAGE = 'SAVE_TO_LOCALSTORAGE'
const GET_FROM_LOCALSTORAGE = 'GET_FROM_LOCALSTORAGE'

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
    case GET_FROM_LOCALSTORAGE:
      return {
        ...state,
        hotspots: action.payload
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
  return dispatch => {
    dispatch({
      type: DELETE_HOTSPOT,
      payload: hotspotIndex
    })

    dispatch(saveToLocalStorage())
  }
}

export const onCaptureClick = e => {
  return dispatch => {
    const x = e.pageX - 10;
    const y = e.pageY - 10;
  
    dispatch({
      type: CAPTURE_SPOT,
      payload: { x, y }
    })

    dispatch(saveToLocalStorage())
  }
}

export const onHotspotTextChange = (e, field, hotspotIndex) => {
  return dispatch => {
    dispatch({
      type: CHANGE_TEXT,
      payload: {
        value: e.target.value,
        field,
        index: hotspotIndex
      }
    })

    dispatch(saveToLocalStorage())
  }
}

const saveToLocalStorage = () => {
  return (dispatch, getState) => {
    const { hotspots } = getState()
    
    localStorage.setItem('conpassHotspots', JSON.stringify(hotspots))

    dispatch({ type: SAVE_TO_LOCALSTORAGE })
  }
}

export const getFromLocalStorage = () => {
  const stored = JSON.parse(localStorage.getItem('conpassHotspots'))
  
  return {
    type: GET_FROM_LOCALSTORAGE,
    payload: stored || []
  }
}