import reducer, {
  initialState,
  fetchEvents,
  fetchEventsSuccess,
  fetchEventsError,
  changePage,
  toggleEntry,
} from 'src/slices/event'
import { EventItem, EventState } from 'src/types'
import { getPageCount } from 'src/utils/helpers'

import events from '../../__mocks__/events'

describe('eventSlice', () => {
  test('should set loading true on fetchEvents', () => {
    const nextState = {
      ...initialState,
      loading: true,
    }
    const result = reducer(initialState, fetchEvents())

    expect(result).toEqual(nextState)
  })

  test('should set value for events on fetchEventsSuccess', () => {
    const payload = events as EventItem[]

    const nextState = {
      ...initialState,
      events: payload,
      pageCount: getPageCount(payload, initialState.eventsPerPage),
      loading: false,
    }
    const result = reducer(initialState, fetchEventsSuccess(payload))

    expect(result).toEqual(nextState)
  })

  test('should set loading false and error to payload on fetchEventsError', () => {
    const payload = 'error'
    const nextState = {
      ...initialState,
      loading: false,
      error: payload,
    }
    const result = reducer(initialState, fetchEventsError(payload))

    expect(result).toEqual(nextState)
  })

  test('should set currentPage on changePage', () => {
    const payload = 5
    const nextState = {
      ...initialState,
      currentPage: payload,
    }
    const result = reducer(initialState, changePage(payload))

    expect(result).toEqual(nextState)
  })

  test('should set event isEntry and entries on toggleEntry', () => {
    const payload = events[0].eventID

    const initialStateBeforeToggleEntry = {
      ...initialState,
      events: [events[0], events[1], events[2]],
    } as EventState

    const nextState = {
      ...initialStateBeforeToggleEntry,
      events: [{ ...events[0], isEntry: true }, { ...events[1] }, { ...events[2] }],
      entries: [events[0].eventID],
    }
    const result = reducer(initialStateBeforeToggleEntry, toggleEntry(payload))

    expect(result).toEqual(nextState)
  })
})
