import React from 'react'
import Board from './Board'

function Game (props) {
  let {history, handleClickChessWrap, winner,goBack,} = props
  let boardWidth = document.documentElement.clientWidth * 0.95
  let chessWrapWidth = 40 * boardWidth / 790
  let chessWidth = chessWrapWidth * 0.9
  let boardPadding = 15 * boardWidth / 790
  
  let currentSideClassName = ''
  if (history[history.length - 1].currentSide === 0) {
    currentSideClassName = 'black'
  } else if (history[history.length - 1].currentSide === 1) {
    currentSideClassName = 'white'
  }
  
  return (
    <div className="game">
      {/*title*/}
      <div className="title">
        <h4>围棋</h4>
      </div>
      {/*下一步 & 赢家*/}
      <div className="current-side">
        <span>下一步：</span>
        <button className={currentSideClassName}/>
      </div>
      {/*棋盘*/}
      <Board history={history}
             boardWidth={boardWidth}
             chessWrapWidth={chessWrapWidth}
             chessWidth={chessWidth}
             boardPadding={boardPadding}
             handleClickChessWrap={handleClickChessWrap}
             winner={winner}
      />
      {/*  按钮区*/}
      <div className="btns">
        <button onClick={goBack}>返回上一步</button>
        <button>重玩</button>
      </div>
    </div>
  )
}

export default Game