import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import preloadedState from './initialState'
import { rootReducer } from './reducers/index'

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, preloadedState, middlewareEnhancer)

  return store
}
