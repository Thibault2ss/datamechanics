import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import { getSparkApps } from 'store/spark_apps/selectors'
import { fetchSparkApps } from 'store/spark_apps/actions'
import SparkAppCard from 'components/Common/SparkAppCard'
import { ISparkApp } from 'store/spark_apps/types'


const SparkAppList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface Props {
  fetchApps: typeof fetchSparkApps
  apps: ISparkApp[]
}

const SparkAppCards = (props: Props): any => {
  return props.apps.map(app => (
    <SparkAppCard key={app.appName} app={app} />
  ))
}

const SparkApps: React.FC<Props> = props => {
  const { apps, fetchApps } = props
  
  React.useEffect(() => {
    !apps.length && fetchApps()
  }, [])

  return (
    <SparkAppList>
      {apps.length ? <SparkAppCards {...props} /> : <Loader height={'none'} />}
    </SparkAppList>
)
}

const mapStateToProps = (state: AppState) => {
  return {
    apps: getSparkApps(state)
  }
}

const mapDispatchToProps = {
  fetchApps: fetchSparkApps
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SparkApps)
