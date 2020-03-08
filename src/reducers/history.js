import * as types from '../actions/types'
import { getDefaultChesses } from '../utils'

const initialHistory = [{
  chesses: getDefaultChesses(),
  currentSide: 0, // 0黑子 1白子 ，默认黑子先下
  latestChessIndex: null,
}]

function history (state = initialHistory, action) {
  switch (action.type) {
    case types.ADD_HISTORY:
      return [...state, action.newHistoryStep];
    case types.POP_HISTORY:
      return state.slice(0, state.length - 1);
    case types.CLEAR_HISTORY:
      return initialHistory;
    default:
      return state;
  }
}

export default history