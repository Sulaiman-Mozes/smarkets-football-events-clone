
import {
    GET_EVENT_DETAILS_FAIL,
    GET_EVENT_DETAILS_SUCCESS,
    GET_EVENT_DETAILS,
    EventDetailsActionTypes,
    EventDetailState
  } from './types'
import initialState, {emptyEvent} from '../initialState'

  
  export function eventDetailReducer(
    state: EventDetailState = initialState.eventDetails,
    action: EventDetailsActionTypes
  ): EventDetailState {
    switch (action.type) {
    case GET_EVENT_DETAILS:
        return { ...state, isLoading: true, event: emptyEvent, error:"" }
      case GET_EVENT_DETAILS_SUCCESS:
        return { ...state, isLoading: false, event: action.payload.events[0] }
      case GET_EVENT_DETAILS_FAIL:
        return { ...state, isLoading: false, error: action.payload.error}
      default:
        return state
    }
  }
