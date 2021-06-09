import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

import Logo from '../Logo'

interface AppNavbarProps {
  onMobileNavOpen: () => void
}

const AppNavbar: React.FC<AppNavbarProps> = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([])

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Box>
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