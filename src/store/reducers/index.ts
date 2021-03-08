// src/store/index.ts

import { combineReducers } from "redux";
import { eventReducer } from "../events/reducer";
import { eventDetailReducer } from "../eventDetails/reducer";

export const rootReducer = combineReducers({
  events: eventReducer,
  eventDetails: eventDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
