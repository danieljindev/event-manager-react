import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Box, Container, Grid, Pagination } from '@material-ui/core'
import events from 'src/__mocks__/events'
import EventCard from 'src/components/event/EventCard'
import { EventItem } from 'src/types'

const ProductList = () => (
  <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home | Event Manager</title>
    </Helmet>

    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        pb: 11,
        pt: 3,
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {/* {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))} */}
            {events.map((event) => (
              <Grid item key={event.eventID} lg={4} md={6} xs={12}>
                <EventCard event={event as EventItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} variant="outlined" size="large" />
        </Box>
      </Container>
    </Box>
  </HelmetProvider>
)

export default ProductList
