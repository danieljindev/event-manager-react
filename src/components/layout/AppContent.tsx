import React from 'react'
import { experimentalStyled } from '@material-ui/core'

export interface AppContentProps {
  children: JSX.Element[] | JSX.Element
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return (
    <DashboardLayoutWrapper>
      <DashboardLayoutContainer>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </DashboardLayoutContainer>
    </DashboardLayoutWrapper>
  )
}

export default AppContent

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
