import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventState } from 'src/types'
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
    fetch: (state) => {
      state.loading = true
    },

    fetchSuccess: (state, { payload }: PayloadAction<any>) => {
      state.events = payload
      state.pageCount = getPageCount(state.events, state.eventsPerPage)
      state.loading = false
    },

    fetchError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
      state.loading = false
    },
  },
})

export const { fetch, fetchSuccess, fetchError } = authSlice.actions

export default authSlice.reducer
