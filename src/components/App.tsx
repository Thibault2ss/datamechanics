import 'core-js/stable'
import React from 'react'
import 'regenerator-runtime/runtime'
import Loader from 'components/Common/Loader'
import PrivateRoute from 'components/Common/PrivateRoute'
import { GlobalStyle } from 'components/Common/GlobalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Main = React.lazy(() => import('components/Main'))
const Login = React.lazy(() => import('components/Login'))


const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
        <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/'>
            <Main />
          </PrivateRoute>
        </Switch>
      </Router>
      <GlobalStyle />
    </React.Suspense>
  )
}

export default App
