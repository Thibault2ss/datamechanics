import { Dispatch } from 'redux'
import instance from 'utils/axios'
import { 
  FETCH_SPARK_APPS,
  FETCH_SPARK_APP_DETAIL,
  SET_SHOW_FILTER,
  DELETE_SPARK_APPS,
  SparkAppState,
  ISetShowFilterAction,
  ISparkApp } from './types'

export const fetchSparkApps = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data } = await instance.get('apps')
    dispatch({
      type: FETCH_SPARK_APPS,
      payload: Object.assign({}, ...data.map((x: ISparkApp) => ({[x.appName]: x})))
    })
  } catch (err) {
    console.error(`[Action: fetchSparkApps] - ${err}`)
  }
}

export const fetchSparkAppDetail = (id: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data } = await instance.get(`apps/${id}`)
    dispatch({
      type: FETCH_SPARK_APP_DETAIL,
      payload: data,
    })
  } catch (err) {
    console.error(`[Action: fetchSparkAppDetail] - ${err}`)
  }
}

export const fetchSparkAppLogs = (id: string): Promise<any> => {
  // TODO: add logs to the store in a dict, like the app dict
  // (except if logs need to be refreshed everytime)
  return instance.get(`apps/${id}/log`)
    .then(resp => resp.data)
}

export const deleteSparkApp = (id: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    await instance.delete(`apps/${id}`)
    dispatch({
      type: DELETE_SPARK_APPS,
      payload: id
    })
  } catch (err) {
    console.error(`[Action: deleteSparkApp] - ${err}`)
  }
}


export const setShowFilter = (filter: SparkAppState[]): ISetShowFilterAction => {
  return {
    type: SET_SHOW_FILTER,
    payload: filter
  }
}