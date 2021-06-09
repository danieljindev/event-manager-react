import { combineReducers, Reducer } from 'redux'
import eventReducer from 'src/slices/event'
import { RootState } from 'src/types'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  eventState: eventReducer,
})

export default rootReducer
