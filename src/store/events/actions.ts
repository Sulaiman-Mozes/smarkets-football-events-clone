import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_FAIL,
  GET_ALL_EVENTS_SUCCESS,
  GET_POPULAR_EVENTS,
  GET_POPULAR_EVENTS_FAIL,
  GET_POPULAR_EVENTS_SUCCESS,
  AllEventResponsePayload,
  EventActionTypes,
  EventsRequestParams,
} from "./types";
import axios from "../../utils/axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";

export const requestAllEvents = (payload: boolean): EventActionTypes => {
  return {
    type: GET_ALL_EVENTS,
    payload,
  };
};

export function getAllEventsFail(payload: { error: string }): EventActionTypes {
  return {
    type: GET_ALL_EVENTS_FAIL,
    payload,
  };
}

export function getAllEventsSuccess(
  payload: AllEventResponsePayload
): EventActionTypes {
  return {
    type: GET_ALL_EVENTS_SUCCESS,
    payload,
  };
}

export const requestPopularEvents = (payload: boolean): EventActionTypes => {
  return {
    type: GET_POPULAR_EVENTS,
    payload,
  };
};

export function getPopularEventsFail(payload: {
  error: string;
}): EventActionTypes {
  return {
    type: GET_POPULAR_EVENTS_FAIL,
    payload,
  };
}

export function getPopularEventsSuccess(
  payload: AllEventResponsePayload
): EventActionTypes {
  return {
    type: GET_POPULAR_EVENTS_SUCCESS,
    payload,
  };
}

export const getAllEvents = (
  params?: EventsRequestParams | {}
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(requestAllEvents(true));
  return axios
    .get("events", {
      params,
    })
    .then((response) => {
      dispatch(getAllEventsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getAllEventsFail({ error: "An Error occured, Try again" }));
    });
};

export const getEventsByIds = (
  event_ids: string[]
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  if (event_ids.length < 1) {
    dispatch(getPopularEventsSuccess({ events: [] }));
    return;
  }
  return axios
    .get(`events/${event_ids.toString()}`, {
      params: { include_hidden: true },
    })
    .then((response) => {
      console.log("=======success=====", response.data);
      dispatch(getPopularEventsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getPopularEventsFail({ error: "An Error occured, Try again" }));
    });
};

export const getPopularEvents = (
  sport: string = ""
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(requestPopularEvents(true));
  return axios
    .get(`popular/event_ids/${sport}`)
    .then((response) => {
      dispatch(getEventsByIds(response.data.popular_event_ids));
    })
    .catch((error) => {
      dispatch(getPopularEventsFail({ error: "An Error occured, Try again" }));
    });
};
