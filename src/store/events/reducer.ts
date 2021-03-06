
import {
    GET_ALL_EVENTS,
    GET_POPULAR_EVENTS,
    EventActionTypes,
    EventState
  } from './types'
  
  const initialState: EventState = {
    allEvents: [],
    popularEvents: []
  }
  
  export function eventReducer(
    state = initialState,
    action: EventActionTypes
  ): EventState {
    switch (action.type) {
      case GET_ALL_EVENTS:
        return { ...state, allEvents: action.payload.events }
      case GET_POPULAR_EVENTS:
        return { ...state, popularEvents: action.payload.events }
      default:
        return state
    }
  }