import React from 'react'
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom'
import { Button, ListItem } from '@material-ui/core'
import { Icon } from 'react-feather'

export interface NavItemProps {
  href: string
  icon?: Icon
  title: string
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: NavIcon, title, ...rest }) => {
  const location = useLocation()

  const active = href
    ? !!matchPath(location.pathname, {
        path: href,
      })
    : false

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main',
          }),
          '& svg': {
            mr: 1,
          },
        }}
        to={href}
      >
        {NavIcon && <NavIcon size="20" />}
        <span>{title}</span>
      </Button>
    </ListItem>
  )
}

export default NavItem
