import React from 'react'
import { Box, colors, Container, experimentalStyled, Link, Typography } from '@material-ui/core'

const AppFooter = () => {
  return (
    <Footer>
      <Container>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="body2" color="white">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Event Manager
            </Link>{' '}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </Footer>
  )
}

export default AppFooter

const Footer = experimentalStyled('footer')(({ theme: appTheme }) => ({
  padding: appTheme.spacing(3, 1),
  marginTop: '-68px',
  backgroundColor: colors.indigo[400],
}))
