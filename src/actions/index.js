import * as types from './types'

export function addHistory (newHistoryStep) {
  return {
    type: types.ADD_HISTORY,
    newHistoryStep
  }
}

export function popHistory () {
  return {
    type: types.POP_HISTORY,
  }
}

export function clearHistory () {
  return {
    type: types.CLEAR_HISTORY,
  }
}

export function setWinner (winner) {
  return {
    type:types.SET_WINNER,
    winner
  }
}