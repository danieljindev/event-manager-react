import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core'
import { PrizePool } from 'src/types'
import { blue } from '@material-ui/core/colors'

const PrizePoolCard: React.FC<PrizePool> = ({ winningsPrizePoolAmount, bonusPrizePoolAmount }) => (
  <Card sx={{ height: '100%' }}>
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
            color: blue[900],
            mr: 1,
          }}
        >
          Prize Pools
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            WINNING
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {winningsPrizePoolAmount}
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            BONUS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {bonusPrizePoolAmount}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default PrizePoolCard
