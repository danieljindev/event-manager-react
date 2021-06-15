import { all, put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { fetchEvents, fetchEventsSuccess, fetchEventsError } from 'src/slices/event'
import { EventItem } from 'src/types'

// Get events from API
function* fetchEventsSaga(): any {
  let events: EventItem[] = []

  try {
    events = (yield axios('https://run.mocky.io/v3/b20b77ab-7e67-4375-b4ea-233d09177da3')).data

    yield put(fetchEventsSuccess(events))
  } catch (error) {
    yield put(fetchEventsError(error.message))
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([takeLatest(fetchEvents.type, fetchEventsSaga)])
}

export default rootSaga
