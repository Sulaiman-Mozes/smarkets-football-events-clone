import { AllEventResponsePayload, GET_POPULAR_EVENTS, GET_ALL_EVENTS, EventActionTypes, EventsRequestParams } from './types'
import axios from '../../utils/axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Action } from 'redux';


export function setAllEvents(payload: AllEventResponsePayload): EventActionTypes {
  return {
    type: GET_ALL_EVENTS,
    payload
  }
}

export function setPopularEvents(payload: AllEventResponsePayload): EventActionTypes {
  return {
    type: GET_POPULAR_EVENTS,
    payload
  }
}


export const getAllEvents = (
    params?: EventsRequestParams | {}
  ): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    return axios.get('events', {
        params
      })
      .then(function (response) {
        dispatch(
            setAllEvents(response.data)
          )
      })
      .catch(function (error) {
        console.log(error);
      })
  }


 export const getEventsByIds = (event_ids: string[]): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    if(event_ids.length < 1){
      dispatch(
        setPopularEvents({events: []})
      )
      return;
    }
    return axios.get(`events/${event_ids.toString()}`, {
        params: { include_hidden: true }
      })
      .then(function (response) {
        dispatch(
            setPopularEvents(response.data)
          )
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  export const getPopularEvents = (
    sport: string = ""
  ): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    return axios.get(`popular/event_ids/${sport}`)
      .then(function (response) {
        dispatch(getEventsByIds(response.data.popular_event_ids));
      })
      .catch(function (error) {
        console.log(error);
      })
  }
