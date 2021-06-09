import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Avatar, Box, Button, Divider, Drawer, List, Typography } from '@material-ui/core'
import sidebarMenuMap from 'src/utils/menus'

import NavItem from './NavItem'

export interface AppSidebarProps {
  onMobileClose: () => void
  openMobile: boolean
}

const AppSidebar: React.FC<AppSidebarProps> = ({ onMobileClose, openMobile }) => {
  const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [location.pathname])

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <Typography color="textPrimary" variant="h5">
          Developed by Daniel
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {sidebarMenuMap.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  )

  return (
    <>
      <Drawer
        sx={{ display: { lg: 'none', xl: 'block' } }}
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 256,
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        sx={{ display: { lg: 'block', xs: 'none' } }}
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 256,
            top: 64,
            height: 'calc(100% - 64px)',
          },
        }}
      >
        {content}
      </Drawer>
    </>
  )
}

AppSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
}

export default AppSidebar
