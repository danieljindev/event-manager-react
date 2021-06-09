import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  experimentalStyled,
  Grid,
  Typography,
} from '@material-ui/core'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { purple } from '@material-ui/core/colors'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import EventNoteIcon from '@material-ui/icons/EventNote'
import dayjs from 'dayjs'
import { EventItem } from 'src/types'

import PrizePoolCard from './PrizePoolCard'
import TournamentCard from './TournamentCard'

const EventCard: React.FC<{ event: EventItem }> = ({ event, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
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
          <ColorButton variant="contained">Add to Entries</ColorButton>
        </Grid>
      </Grid>
    </Box>
  </Card>
)

export default EventCard

const ColorButton = experimentalStyled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}))
