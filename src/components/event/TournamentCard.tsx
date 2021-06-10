import React from 'react'
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { red, blue } from '@material-ui/core/colors'
import { TournamentItem } from 'src/types'

const TournamentCard: React.FC<TournamentItem> = ({ name, stage }) => (
  <Card sx={{ height: '100%', backgroundColor: '#f3f6f9' }}>
    <CardContent>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          sx={{
            color: red[900],
            mr: 1,
          }}
        >
          Tournament
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography color="textSecondary" gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography color="textPrimary" variant="h6">
          Stage : {stage}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

export default TournamentCard
