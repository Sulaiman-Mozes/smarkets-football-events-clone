import { EventResponsePayload, GET_POPULAR_EVENTS, GET_ALL_EVENTS, EventActionTypes } from './types'


export function getAllEvents(payload: EventResponsePayload): EventActionTypes {
  return {
    type: GET_ALL_EVENTS,
    payload
  }
}

export function getPopularEvents(payload: EventResponsePayload): EventActionTypes {
  return {
    type: GET_POPULAR_EVENTS,
    payload
  }
}
