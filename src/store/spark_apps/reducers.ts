import {
  FETCH_SPARK_APPS,
  FETCH_SPARK_APP_DETAIL,
  DELETE_SPARK_APPS,
  SET_SHOW_FILTER,
  ISparkAppsState,
  ISparkAppsFetchAction,
  ISparkAppsDeleteAction,
  ISetShowFilterAction,
  ISparkAppDetailFetchAction,
  SparkAppState
} from './types'

const initialState: ISparkAppsState = {
  map: {},
  showFilter: Object.values(SparkAppState)
}

export function sparkApps(
  state = initialState,
  action: ISparkAppsFetchAction
    | ISparkAppsDeleteAction
    | ISetShowFilterAction
    | ISparkAppDetailFetchAction
): ISparkAppsState {
  switch (action.type) {
    case FETCH_SPARK_APPS:
      return { ...state, map: action.payload }

    case FETCH_SPARK_APP_DETAIL:
      let newState = { ...state, map: { ... state.map } }
      newState.map[action.payload.appName] = action.payload
      return newState

    case DELETE_SPARK_APPS:
      let newState1 = { ...state, map: { ... state.map } }
      delete newState1.map[action.payload]
      return newState1

    case SET_SHOW_FILTER:
      return { ...state, showFilter: action.payload }
      
    default:
      return state
  }
}
