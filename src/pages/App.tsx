import React, { useState } from 'react'
import { experimentalStyled, ThemeProvider } from '@material-ui/core'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Redirect, Route, Switch } from 'react-router-dom'
import AppGlobalStyle from 'src/components/GlobalStyles'
import AppFooter from 'src/components/layout/AppFooter'
import AppNavbar from 'src/components/layout/AppNavbar'
import AppSidebar from 'src/components/layout/AppSidebar'
import { GlobalStateProvider } from 'src/contexts/GlobalStateContext'
import theme from 'src/theme'
import { getDayJsLocale } from 'src/utils/helpers'

import About from './About'
import Home from './Home'

dayjs.extend(localizedFormat)
dayjs.locale(getDayJsLocale(navigator.language))

export default function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Event Manager</title>
      </Helmet>

      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <AppGlobalStyle />
          <DashboardLayoutRoot>
            <AppNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
            <AppSidebar
              onMobileClose={() => setMobileNavOpen(false)}
              openMobile={isMobileNavOpen}
            />
            <DashboardLayoutWrapper>
              <DashboardLayoutContainer>
                <DashboardLayoutContent>
                  <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route>
                      <Redirect to="/home" />
                    </Route>
                  </Switch>
                  <AppFooter />
                </DashboardLayoutContent>
              </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
          </DashboardLayoutRoot>
        </ThemeProvider>
      </GlobalStateProvider>
    </HelmetProvider>
  )
}

const DashboardLayoutRoot = experimentalStyled('div')(({ theme: appTheme }) => ({
  backgroundColor: appTheme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
}))

const DashboardLayoutWrapper = experimentalStyled('div')(({ theme: appTheme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [appTheme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
}))

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
})

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
})
