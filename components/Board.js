import React from 'react'
import boardStyle from '../styles/Board.module.scss'

export default function Board() {

  let array = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={boardStyle.container}>

      {array.map((row, i) => {
        return array.map((column, i) => {
          return <div className={ (7-column+row)%2 == 0 ? boardStyle.black : boardStyle.white } data-x={column} data-y={7-row}>{`x= ${column} y=${7-row}`}</div>
        })
      })}

    </div>
  )
}
