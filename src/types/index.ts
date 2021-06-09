import React from 'react'
import { EventStatus, EventsSortKey } from 'src/utils/enums'

// ==============================================================================
// Items
// ==============================================================================

export interface SportItem {
  sportID: string
  name: string
  abbreviation?: string
  imageUrl?: string
}

export interface TournamentItem {
  tournamentID: string
  name: string
  stage: string
}

export interface PrizePool {
  winningsPrizePoolAmount: number
  bonusPrizePoolAmount: number
}

export interface EventItem {
  eventID: string
  name: string
  eventStatus: EventStatus
  goLiveAt: string
  sport: SportItem
  tournament: TournamentItem
  prizePools: PrizePool
  matchSeries: string
}

// ==============================================================================
// State
// ==============================================================================

export interface EventState {
  loading: boolean
  events: EventItem[]
  entries: string[]
  currentPage: number
  pageCount: number
  eventsPerPage: number
  orderBy: EventsSortKey
  error?: string
}

export interface RootState {
  eventState: EventState
}
