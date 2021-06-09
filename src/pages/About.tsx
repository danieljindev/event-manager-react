import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Box, Container, Typography } from '@material-ui/core'

const About = () => (
  <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About | Event Manager</title>
    </Helmet>

    <Box
      sx={{
        backgroundColor: 'background.default',
        height: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="h1">About This App</Typography>
        <Typography variant="h4">App to manage events</Typography>
        <Typography variant="body2">Version: 1.0.0</Typography>
      </Container>
    </Box>
  </HelmetProvider>
)

export default About
