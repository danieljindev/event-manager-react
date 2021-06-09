import Container from '@material-ui/core/Container'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Redirect, Route, Switch } from 'react-router-dom'
import { GlobalStateProvider } from 'src/contexts/GlobalStateContext'

import About from './About'
import Home from './Home'
import NotFound from './NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Event Manager</title>
      </Helmet>

      <GlobalStateProvider>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </GlobalStateProvider>
    </HelmetProvider>
  )
}
