export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'
export const GET_POPULAR_EVENTS = 'GET_POPULAR_EVENTS'

export interface Event {
    bet_allowed: boolean
    bettable: boolean
    chart_time_period: string
    created: string
    description: string
    display_order: number
    end_date: string
    full_slug: string
    hidden: boolean
    id: string
    inplay_enabled: boolean
    modified: string
    name: string
    parent_id: string
    seo_description: string
    short_name: string
    slug: string
    special_rules: string
    start_date: string
    start_datetime: string
    state: string
    type: string
}

export interface EventResponsePayload {
    events: Event[]
}

export interface EventState {
    allEvents: Event[]
    popularEvents: Event[]
}

interface GetAllEvents {
  type: typeof GET_ALL_EVENTS
  payload: EventResponsePayload
}

interface GetPopularEvents {
  type: typeof GET_POPULAR_EVENTS
  payload: EventResponsePayload
}

export type EventActionTypes = GetAllEvents | GetPopularEvents
