import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './containers/GameContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.scss'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <GameContainer store={store}/>
  </Provider>,
  document.getElementById('root')
)