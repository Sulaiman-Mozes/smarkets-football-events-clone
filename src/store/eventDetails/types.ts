export const GET_EVENT_DETAILS = "GET_EVENT_DETAILS";
export const GET_EVENT_DETAILS_SUCCESS = "GET_EVENT_DETAILS_SUCCESS";
export const GET_EVENT_DETAILS_FAIL = "GET_EVENT_DETAILS_FAIL";

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

export interface EventResponsePayload {
  events: Event[];
}

export interface EventDetailState {
  event: Event;
  isLoading: boolean;
  error: string;
}

interface GetEvent {
  type: typeof GET_EVENT_DETAILS;
  payload: boolean;
}

interface GetEventSuccess {
  type: typeof GET_EVENT_DETAILS_SUCCESS;
  payload: { events: Event[] };
}

interface GetEventFail {
  type: typeof GET_EVENT_DETAILS_FAIL;
  payload: { error: string };
}

export type EventDetailsActionTypes = GetEvent | GetEventSuccess | GetEventFail;
