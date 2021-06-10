import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventItem, EventState } from 'src/types'
import { EventsSortKey } from 'src/utils/enums'
import { getPageCount } from 'src/utils/helpers'

export const initialState: EventState = {
  loading: true,
  events: [],
  entries: [],
  currentPage: 1,
  pageCount: 1,
  eventsPerPage: 10,
  orderBy: EventsSortKey.EVENTID,
  error: '',
}

const authSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetchEvents: (state) => {
      state.loading = true
    },

    fetchEventsSuccess: (state, { payload }: PayloadAction<EventItem[]>) => {
      state.events = payload
      state.pageCount = getPageCount(state.events, state.eventsPerPage)
      state.loading = false
    },

    fetchEventsError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
      state.loading = false
    },

    changePage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload
    },

    toggleEntry: (state, { payload }: PayloadAction<string>) => {
      state.events = state.events.map((event) =>
        event.eventID === payload ? { ...event, isEntry: !event.isEntry } : event
      )
    },
  },
})

export const { fetchEvents, fetchEventsSuccess, fetchEventsError, changePage, toggleEntry } =
  authSlice.actions

export default authSlice.reducer
