import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import { useSelector } from 'react-redux'
import { getEventStates } from 'src/selectors'

import Logo from '../Logo'

interface AppNavbarProps {
  onMobileNavOpen: () => void
}

const AppNavbar: React.FC<AppNavbarProps> = ({ onMobileNavOpen, ...rest }) => {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { entries } = useSelector(getEventStates)

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Badge badgeContent={entries.length} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          sx={{ display: { lg: 'none', xl: 'block' } }}
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavbar
