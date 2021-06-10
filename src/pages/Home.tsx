import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Box, Container, Grid, Pagination } from '@material-ui/core'
import EventCard from 'src/components/event/EventCard'
import { EventItem } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import { getEventStates, getPageEvents } from 'src/selectors'
import { changePage } from 'src/slices/event'

const Home = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { events, pageCount, currentPage } = useSelector(getEventStates)
  const filteredEvents = useSelector(getPageEvents)

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _changePage = (page: number) => dispatch(changePage(page))

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    _changePage(page)
  }

  return (
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
              {filteredEvents.map((event) => (
                <Grid item key={event.eventID} lg={4} md={6} xs={12}>
                  <EventCard eventItem={event as EventItem} />
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
            <Pagination
              color="primary"
              count={pageCount}
              page={currentPage}
              variant="outlined"
              size="large"
              onChange={onPageChange}
            />
          </Box>
        </Container>
      </Box>
    </HelmetProvider>
  )
}

export default Home
