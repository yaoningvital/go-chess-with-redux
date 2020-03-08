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