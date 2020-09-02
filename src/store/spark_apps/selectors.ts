import { AppState } from 'store'
import { createSelector } from 'reselect'
import { ISparkApp, SparkAppState } from './types'

const sparkApps = (state: AppState): { [id: string]: ISparkApp } => state.sparkApps.map
const sparkAppDetail = (state: AppState, id: string): ISparkApp => state.sparkApps.map[id]
const showFilter = (state: AppState): SparkAppState[] => state.sparkApps.showFilter

export const getSparkApps = createSelector(
  sparkApps,
  showFilter,
  (map, showFilter) => {
    return Object.values(map).filter(app => showFilter.includes(app.status.applicationState.state))
  }
)

export const getSparkAppDetail = createSelector(
  sparkAppDetail,
  app => app
)

export const getShowFilter = createSelector(
  showFilter,
  showFilter => {
    return showFilter
  }
)
