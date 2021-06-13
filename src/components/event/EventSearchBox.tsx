import React from 'react'
import { Box, TextField, InputAdornment, SvgIcon } from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { changeTerm } from 'src/slices/event'
import { getEventStates } from 'src/selectors'

const EventSearchBox = () => {
  // ===========================================================================
  // Selectors
  // ===========================================================================

  const { term } = useSelector(getEventStates)
  // const filteredEvents = useSelector(getPageEvents)

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _changeTerm = (value: string) => dispatch(changeTerm(value))

  return (
    <Box sx={{ maxWidth: 500 }}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder="Search product"
        variant="outlined"
        value={term}
        onChange={(event) => _changeTerm(event.target.value)}
      />
    </Box>
  )
}

export default EventSearchBox
