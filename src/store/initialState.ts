import { EventDetailState } from "./eventDetails/types";
import { EventState, Event } from "./events/types";

interface InitialState {
  events: EventState;
  eventDetails: EventDetailState;
}

export const emptyEvent: Event = {
  bet_allowed: false,
  bettable: false,
  chart_time_period: "",
  created: "",
  description: "",
  display_order: 0,
  end_date: "",
  full_slug: "",
  hidden: false,
  id: "",
  inplay_enabled: false,
  modified: "",
  name: "",
  parent_id: "",
  seo_description: "",
  short_name: "",
  slug: "",
  special_rules: "",
  start_date: "",
  start_datetime: "",
  state: "",
  type: "",
};

const initialState: InitialState = {
  events: {
    allEvents: { items: [], isLoading: false, error: "" },
    popularEvents: { items: [], isLoading: false, error: "" },
  },
  eventDetails: {
    isLoading: false,
    error: "",
    event: emptyEvent,
  },
};

export default initialState;
