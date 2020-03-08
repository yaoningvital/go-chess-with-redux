import * as types from '../actions/types'

function winner (state = null, action) {
  switch (action.type) {
    case types.SET_WINNER:
      return action.winner;
    default:
      return state;
  }
}

export default winner