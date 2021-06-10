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
import { purple, blue, indigo } from '@material-ui/core/colors'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import dayjs from 'dayjs'
import { EventItem } from 'src/types'
import { useDispatch } from 'react-redux'
import { toggleEntry } from 'src/slices/event'

import PrizePoolCard from './PrizePoolCard'
import TournamentCard from './TournamentCard'

const EventCard: React.FC<{ event: EventItem }> = ({ event, ...rest }) => {
  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const dispatch = useDispatch()

  const _toggleEntry = () => dispatch(toggleEntry(event.eventID))

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
        boxShadow: event.isEntry ? '1px 1px 4px 3px red;' : 3,
      }}
      onClick={onClickHandler}
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
          {event.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {event.eventStatus}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <TournamentCard {...event.tournament} />
      </Box>
      <Box sx={{ padding: 1 }}>
        <PrizePoolCard {...event.prizePools} />
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
              {dayjs(event.goLiveAt).format('LT on L')}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {event.isEntry ? (
              <BlueButton variant="contained" onClick={onClickHandler}>
                Add to Entries
              </BlueButton>
            ) : (
              <PurpleButton variant="contained" onClick={onClickHandler}>
                Remove from Entries
              </PurpleButton>
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
