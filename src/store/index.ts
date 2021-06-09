import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'src/sagas'
import rootReducer from 'src/slices'
import { RootState } from 'src/types'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export default store
