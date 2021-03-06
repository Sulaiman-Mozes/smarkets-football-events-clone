import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './reducers/index'

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, middlewareEnhancer)

  return store
}
