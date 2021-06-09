import Container from '@material-ui/core/Container'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { GlobalStateProvider } from 'src/contexts/GlobalStateContext'

import About from './About'
import Home from './Home'
import NotFound from './NotFound'

export default function App() {
  return (
    <>
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
    </>
  )
}
