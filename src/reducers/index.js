import {combineReducers} from "redux";
import history from './history'
import winner from './winner'

export default combineReducers({
  history,
  winner,
})