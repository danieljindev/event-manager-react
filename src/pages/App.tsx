import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from 'src/selectors'
import { fetchEvents } from 'src/slices/event'
import AppContent from 'src/components/layout/AppContent'
import Loading from 'src/components/Loading'

import Home from './Home'
import About from './About'

dayjs.extend(localizedFormat)
dayjs.locale(getDayJsLocale(navigator.language))

export default function App() {
  // ===========================================================================
  // State
  // ===========================================================================

  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { loading } = useSelector(getEvents)

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _fetchEvents = () => dispatch(fetchEvents())

  // ===========================================================================
  // Hooks
  // ===========================================================================

  useEffect(() => {
    _fetchEvents()
  }, [])

  if (loading) {
    return <Loading loading />
  }

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
            <AppContent>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route>
                  <Redirect to="/home" />
                </Route>
              </Switch>
              <AppFooter />
            </AppContent>
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
