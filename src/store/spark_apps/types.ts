export const FETCH_SPARK_APPS = 'FETCH_SPARK_APPS'
export const FETCH_SPARK_APP_DETAIL = 'FETCH_SPARK_APP_DETAIL'
export const DELETE_SPARK_APPS = 'DELETE_SPARK_APPS'
export const SET_SHOW_FILTER = 'SET_SHOW_FILTER'

export interface ISparkAppsState {
  map: { [id: string] : ISparkApp },
  showFilter: SparkAppState[]
}

export interface ISparkAppsFetchAction {
  type: typeof FETCH_SPARK_APPS
  payload: { [id: string] : ISparkApp }
}

export interface ISparkAppDetailFetchAction {
  type: typeof FETCH_SPARK_APP_DETAIL
  payload: ISparkApp
}

export interface ISparkAppsDeleteAction {
  type: typeof DELETE_SPARK_APPS
  payload: string
}

export interface ISetShowFilterAction {
  type: typeof SET_SHOW_FILTER
  payload: SparkAppState[]
}

export enum SparkAppState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  PENDING = "PENDING",
}

export const SparkAppStateColor =  {
  [SparkAppState.COMPLETED]: "#00C851",
  [SparkAppState.FAILED]: "#ff4444",
  [SparkAppState.RUNNING]: "#33b5e5",
  [SparkAppState.PENDING]: "#ffbb33",
}

export interface ISparkApp {
  appName: string,
  jobName: string,
  configTemplateName: string,
  config: any,
  status: {
    sparkApplicationId: string,
    submissionID: string,
    lastSubmissionAttemptTime: string,
    terminationTime: string,
    driverInfo: {
      webUIServiceName: string,
      webUIPort: number,
      webUIAddress: string,
      podName: string
    },
    applicationState: {
      state: SparkAppState
    },
    executorState: {
      [exectId: string]: SparkAppState,
    },
    executionAttempts: number,
    submissionAttempts: number
  }
}

