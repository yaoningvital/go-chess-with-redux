import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './containers/GameContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.scss'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
let persistor = persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GameContainer store={store}/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)