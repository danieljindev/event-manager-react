import React from 'react'
import { Box } from '@material-ui/core'

import EventSearchBox from './EventSearchBox'
import EventSortby from './EventSortBy'

const EventToolBar = () => (
  <Box sx={{ mx: 3 }}>
    <Box sx={{ mt: 3 }} display="flex" justifyContent="flex-end">
      <EventSearchBox />
      <EventSortby />
    </Box>
  </Box>
)

export default EventToolBar
