import React from 'react'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import PrivateRoute from 'components/Common/PrivateRoute'

const Dashboard = React.lazy(() => import('./Dashboard'))
const SparkAppDetail = React.lazy(() => import('./SparkAppDetail'))

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Main = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Router>
              <Switch>
                <PrivateRoute exact path='/apps'>
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path='/apps/:id'>
                  <SparkAppDetail />
                </PrivateRoute>
                <Route render={({ location }) =>
                  <Redirect
                    to={{
                      pathname: '/apps',
                      state: { from: location }
                    }}
                  />}
                />
              </Switch>
            </Router>
          </React.Suspense>
        </ErrorBoundary>
      </Wrapper>
    </>
  )
}

export default Main
