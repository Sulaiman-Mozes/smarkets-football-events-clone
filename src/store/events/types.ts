export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAIL = "GET_ALL_EVENTS_FAIL";
export const GET_POPULAR_EVENTS = "GET_POPULAR_EVENTS";
export const GET_POPULAR_EVENTS_SUCCESS = "GET_POPULAR_EVENTS_SUCCESS";
export const GET_POPULAR_EVENTS_FAIL = "GET_POPULAR_EVENTS_FAIL";

export interface Event {
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string;
  created: string;
  description: string;
  display_order: number;
  end_date: string;
  full_slug: string;
  hidden: boolean;
  id: string;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string;
  seo_description: string;
  short_name: string;
  slug: string;
  special_rules: string;
  start_date: string;
  start_datetime: string;
  state: string;
  type: string;
}

export interface AllEventResponsePayload {
  events: Event[];
}

export interface PopularEventResponsePayload {
  popular_event_ids: string[];
}

export interface EventState {
  allEvents: { items: Event[]; isLoading: boolean; error: string };
  popularEvents: { items: Event[]; isLoading: boolean; error: string };
}

interface GetPopularEvents {
  type: typeof GET_POPULAR_EVENTS;
  payload: boolean;
}

interface GetPopularEventsSuccess {
  type: typeof GET_POPULAR_EVENTS_SUCCESS;
  payload: AllEventResponsePayload;
}

interface GetPopularEventsFail {
  type: typeof GET_POPULAR_EVENTS_FAIL;
  payload: { error: string };
}

interface GetAllEvents {
  type: typeof GET_ALL_EVENTS;
  payload: boolean;
}

interface GetAllEventsSuccess {
  type: typeof GET_ALL_EVENTS_SUCCESS;
  payload: AllEventResponsePayload;
}

interface GetAllEventsFail {
  type: typeof GET_ALL_EVENTS_FAIL;
  payload: { error: string };
}

export interface EventsRequestParams {
  type: string;
}

export type EventActionTypes =
  | GetAllEvents
  | GetAllEventsSuccess
  | GetAllEventsFail
  | GetPopularEvents
  | GetPopularEventsSuccess
  | GetPopularEventsFail;
