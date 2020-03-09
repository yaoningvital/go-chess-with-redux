import React from 'react'
import Chess from './Chess'

function Board (props) {
  let {
    history, boardWidth, chessWrapWidth, chessWidth,
    boardPadding, handleClickChessWrap, winner,
  } = props
  return (
    <div className="board"
         style={{
           width: boardWidth + 'px',
           height: boardWidth + 'px',
           padding: boardPadding + 'px',
         }}
    >
      {
        history[history.length - 1].chesses.map((rowArr, rowIndex) => {
          return rowArr.map((side, columnIndex) => {
            return (
              <div className="chess-wrap"
                   key={columnIndex}
                   style={{
                     width: chessWrapWidth + 'px',
                     height: chessWrapWidth + 'px',
                   }}
                   onClick={() => handleClickChessWrap([rowIndex, columnIndex], history, winner,)}
              >
                <Chess side={side}
                       index={[rowIndex, columnIndex]}
                       chessWidth={chessWidth}
                />
                { history[history.length - 1].latestChessIndex &&
                  history[history.length - 1].latestChessIndex[0] === rowIndex &&
                  history[history.length - 1].latestChessIndex[1] === columnIndex &&
                  <div className="red-dot"/>
                }
              </div>
            )
          })
        })
      }
    
    </div>
  )
}

export default Board