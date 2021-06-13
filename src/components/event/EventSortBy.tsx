import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getEventStates } from 'src/selectors'
import { changeOrderby } from 'src/slices/event'
import { EventsSortKey } from 'src/utils/enums'

const EventSortby = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { orderBy } = useSelector(getEventStates)
  // const filteredEvents = useSelector(getPageEvents)

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _changeTerm = (value: EventsSortKey) => dispatch(changeOrderby(value))

  return (
    <Box sx={{ minWidth: 150, mx: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="order-by-select">Order By</InputLabel>
        <Select
          labelId="order-by-select"
          value={orderBy}
          label="Order By"
          onChange={(event) => _changeTerm(event.target.value)}
        >
          <MenuItem value={EventsSortKey.EVENTID}>Event ID</MenuItem>
          <MenuItem value={EventsSortKey.NAME}>Event Name</MenuItem>
          <MenuItem value={EventsSortKey.GOLIVEAT}>Go live at</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default EventSortby
