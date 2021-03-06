// src/store/index.ts

import { combineReducers } from 'redux'
import { eventReducer } from '../events/reducer'

export const rootReducer = combineReducers({
  events: eventReducer,

});

export type RootState = ReturnType<typeof rootReducer>
