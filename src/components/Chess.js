import React from 'react'

function Chess (props) {
  let {side, index, chessWidth} = props
  
  let chessClassName = 'chess'
  if (side === 0) {
    chessClassName = 'chess black-chess'
  } else if (side === 1) {
    chessClassName = 'chess white-chess'
  }
  
  return (
    <button className={chessClassName}
            style={{
              width: chessWidth + 'px',
              height: chessWidth + 'px',
              borderRadius: chessWidth / 2 + 'px',
            }}
    />
  )
}

export default Chess