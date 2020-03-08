import Game from '../components/Game'
import { connect } from 'react-redux'
import _ from 'lodash'
import { addHistory, popHistory, } from '../actions'

const mapStateToProps = state => ({
  history: state.history,
  winner: state.winner,
})

const mapDispatchToProps = dispatch => ({
  handleClickChessWrap: ([rowIndex, columnIndex], history, winner) => handleClickChessWrap(dispatch, [rowIndex, columnIndex], history, winner,),
  goBack: () => handleGoBack(dispatch),
})

function handleGoBack (dispatch) {
  dispatch(popHistory())
}

function handleClickChessWrap (dispatch, [rowIndex, columnIndex], history, winner,) {
  // 如果已经有一方胜出了，返回
  if (winner !== null) return
  
  let newHistory = _.cloneDeep(history)
  let newChesses = _.cloneDeep(history[history.length - 1].chesses)
  
  // 如果这个点有棋子了，返回
  if (newChesses[rowIndex][columnIndex] !== null) return
  
  //
  
  // 将点击的这个点变为 对应颜色的棋子
  let currentSide = history[history.length - 1].currentSide
  newChesses[rowIndex][columnIndex] = currentSide
  
  let newCurrentSide = currentSide === 0 ? 1 : 0
  
  let newHistoryStep = {
    chesses: newChesses,
    currentSide: newCurrentSide,
    latestChessIndex: [rowIndex, columnIndex],
  }
  
  dispatch(addHistory(newHistoryStep))
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)