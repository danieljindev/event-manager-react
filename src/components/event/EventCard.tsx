import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Divider,
  experimentalStyled,
  Grid,
  Typography,
} from '@material-ui/core'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { purple, indigo } from '@material-ui/core/colors'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import dayjs from 'dayjs'
import { EventItem } from 'src/types'
import { useDispatch } from 'react-redux'
import { toggleEntry } from 'src/slices/event'
import { TestID } from 'src/resources/TestID'

import PrizePoolCard from './PrizePoolCard'
import TournamentCard from './TournamentCard'

const EventCard: React.FC<{ eventItem: EventItem; index: number }> = ({
  eventItem,
  index,
  ...rest
}) => {
  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _toggleEntry = () => dispatch(toggleEntry(eventItem.eventID))

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const onClickHandler = () => {
    _toggleEntry()
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        boxShadow: eventItem.isEntry ? '1px 1px 4px 3px red;' : 3,
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3,
          }}
        >
          <img
            alt="Product"
            src="/static/images/tournaments.jpg"
            style={{
              width: '100%',
              borderRadius: 5,
            }}
          />
        </Box>
        <Typography align="center" color="textPrimary" gutterBottom variant="h3" fontStyle="italic">
          {eventItem.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {eventItem.eventStatus}
        </Typography>
        <Typography align="center" color="textPrimary" variant="h5">
          {eventItem.matchSeries}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <TournamentCard {...eventItem.tournament} />
      </Box>
      <Box sx={{ padding: 1 }}>
        <PrizePoolCard {...eventItem.prizePools} />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <AccessTimeIcon color="action" />
            <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
              {dayjs(eventItem.goLiveAt).format('LT on L')}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {eventItem.isEntry ? (
              <PurpleButton
                variant="contained"
                onClick={onClickHandler}
                data-testid={TestID.TOGGLE_ENTRY_BUTTON + index}
              >
                Remove from Entries
              </PurpleButton>
            ) : (
              <BlueButton
                variant="contained"
                onClick={onClickHandler}
                data-testid={TestID.TOGGLE_ENTRY_BUTTON + index}
              >
                Add to Entries
              </BlueButton>
            )}
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

export default EventCard

const BlueButton = experimentalStyled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: indigo[500],
  '&:hover': {
    backgroundColor: indigo[700],
  },
}))

const PurpleButton = experimentalStyled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}))
