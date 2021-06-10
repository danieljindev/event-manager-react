import { EventItem, RootState } from 'src/types'
import { getNotesSorter } from 'src/utils/eventsSortStrategies'

/* eslint-disable import/prefer-default-export */
export const getEventStates = (state: RootState) => state.eventState

export const getPageEvents = (state: RootState): EventItem[] => {
  const { orderBy: sortOrderKey, currentPage, eventsPerPage, pageCount, events } = state.eventState
  const fromIndex = (currentPage - 1) * eventsPerPage
  const toIndex = currentPage === pageCount ? events.length - 1 : currentPage * eventsPerPage - 1
  const filtered = events
    .slice()
    .sort(getNotesSorter(sortOrderKey))
    .slice(fromIndex, toIndex + 1)

  return filtered
}
