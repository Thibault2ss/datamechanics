import thunkMiddleware from 'redux-thunk'
import { auth } from 'store/auth/reducers'
import { sparkApps } from 'store/spark_apps/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const rootReducer = combineReducers({
  auth,
  sparkApps
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleware = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleware)
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
}
