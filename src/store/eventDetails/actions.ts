import { GET_EVENT_DETAILS, GET_EVENT_DETAILS_FAIL, GET_EVENT_DETAILS_SUCCESS, EventResponsePayload, EventDetailsActionTypes } from './types'
import axios from '../../utils/axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { Action } from 'redux';


export function getEvent(payload: boolean): EventDetailsActionTypes {
  return {
    type: GET_EVENT_DETAILS,
    payload
  }
}

export function getEventFail(payload: { error: string}): EventDetailsActionTypes {
  return {
    type: GET_EVENT_DETAILS_FAIL,
    payload
  }
}


export function getEventSuccess(payload: EventResponsePayload): EventDetailsActionTypes {
    return {
      type: GET_EVENT_DETAILS_SUCCESS,
      payload
    }
  }
  

 export const getEventsByIds = (event_ids: string[]): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(getEvent(true))
    if(event_ids.length < 1){
      dispatch(
        getEventFail({error: "provide an event id"})
      )
      return;
    }
    return axios.get(`events/${event_ids.toString()}`, {
        params: { include_hidden: true }
      })
      .then(function (response) {
        dispatch(
            getEventSuccess(response.data)
          )
      })
      .catch(function (error) {
        console.log(error);
      })
  }

