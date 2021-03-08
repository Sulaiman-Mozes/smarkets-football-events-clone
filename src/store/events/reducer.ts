import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_FAIL,
  GET_ALL_EVENTS_SUCCESS,
  GET_POPULAR_EVENTS,
  GET_POPULAR_EVENTS_FAIL,
  GET_POPULAR_EVENTS_SUCCESS,
  EventActionTypes,
  EventState,
} from "./types";
import initialState from "../initialState";

export function eventReducer(
  state = initialState.events,
  action: EventActionTypes
): EventState {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return { ...state, allEvents: { isLoading: true, items: [], error: "" } };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        allEvents: {
          ...state.allEvents,
          isLoading: false,
          items: action.payload.events,
        },
      };
    case GET_ALL_EVENTS_FAIL:
      return {
        ...state,
        allEvents: {
          ...state.allEvents,
          isLoading: false,
          error: action.payload.error,
        },
      };
    case GET_POPULAR_EVENTS:
      return {
        ...state,
        popularEvents: { isLoading: true, items: [], error: "" },
      };
    case GET_POPULAR_EVENTS_SUCCESS:
      return {
        ...state,
        popularEvents: {
          ...state.popularEvents,
          isLoading: false,
          items: action.payload.events,
        },
      };
    case GET_POPULAR_EVENTS_FAIL:
      return {
        ...state,
        popularEvents: {
          ...state.popularEvents,
          isLoading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
}
