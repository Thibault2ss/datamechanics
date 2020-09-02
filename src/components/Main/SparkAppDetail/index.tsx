import React, { useEffect, useState } from 'react'
import { RouteComponentProps, useParams, useRouteMatch, Switch } from 'react-router';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import { AppState } from 'store'
import { connect } from 'react-redux'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import { getSparkAppDetail } from 'store/spark_apps/selectors'
import { fetchSparkAppLogs } from 'store/spark_apps/actions'
import { fetchSparkAppDetail } from 'store/spark_apps/actions'
import { ISparkApp } from 'store/spark_apps/types'
import PrivateRoute from 'components/Common/PrivateRoute'
import IconSettings from 'components/Common/Icons/Menu/Settings'
import SparkAppCard from 'components/Common/SparkAppCard'
import Config from './Config'
import Logs from './Logs'
import BreadCrumbs from './BreadCrumbs'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > :first-child {
    flex: 1 0 auto;
  }
`

interface Props {
  fetchDetails: typeof fetchSparkAppDetail
  app: ISparkApp,
}

interface LogResponse {
  appName: string,
  content: string
}

const SparkAppDetail = (props: Props) => {
  const { app, fetchDetails } = props
  const { id } = useParams();
  let { path, url } = useRouteMatch();
  const [logs, setLogs] = useState<string>('')

  useEffect(() => {
    !app && fetchDetails(id!)
    !logs && fetchSparkAppLogs(id!).then((logs: LogResponse) => setLogs(logs.content))
  }, [])

  return (
    <Wrapper>
      <ErrorBoundary>
        <Header>
          <BreadCrumbs />
          <NavLink to={`${url}/config`}>
            <IconSettings/>
          </NavLink>
        </Header>

        {!app ?
          <Loader height={'none'}/> : 
          <>
            <Switch>
              <PrivateRoute exact path={path}>
                <>
                  <SparkAppCard app={app} disableLink />
                  <Logs logs={logs} />
                </>
              </PrivateRoute>
              <PrivateRoute path={`${path}/config`}>
                <Config jsonConfig={JSON.stringify(app.config, null, 2)} />
              </PrivateRoute>
            </Switch>
          </>
        }
      </ErrorBoundary>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState, ownProps: RouteComponentProps<{ id: string }>) => ({
  app: getSparkAppDetail(state, ownProps.match.params.id)
})

const mapDispatchToProps = {
  fetchDetails: fetchSparkAppDetail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SparkAppDetail)
