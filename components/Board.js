import React, { useEffect, useState } from 'react'
import boardStyle from '../styles/Board.module.scss'

export default function Board() {

    let array = [0, 1, 2, 3, 4, 5, 6, 7]

    let whiteTeamStartingPos = {
        rook1: {
            x: 0,
            y: 0,
            symbol: '&#9814;',
            isDead: false
        },
        knight1: {
            x: 1,
            y: 0,
            symbol: '&#9816;',
            isDead: false
        },
        bishop1: {
            x: 2,
            y: 0,
            symbol: '&#9815;',
            isDead: false
        },
        queen: {
            x: 3,
            y: 0,
            symbol: '&#9813;',
            isDead: false
        },
        king: {
            x: 4,
            y: 0,
            symbol: '&#9812;',
            isDead: false
        },
        bishop2: {
            x: 5,
            y: 0,
            symbol: '&#9815;',
            isDead: false
        },
        knight2: {
            x: 6,
            y: 0,
            symbol: '&#9816;',
            isDead: false
        },
        rook2: {
            x: 7,
            y: 0,
            symbol: '&#9814;',
            isDead: false
        },
        pawn1: {
            x: 0,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn2: {
            x: 1,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn3: {
            x: 2,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn4: {
            x: 3,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn5: {
            x: 4,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn6: {
            x: 5,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn7: {
            x: 6,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
        pawn8: {
            x: 7,
            y: 1,
            symbol: '&#9817;',
            isDead: false
        },
    }

    let blackTeamStartingPos = {
        rook1: {
            x: 0,
            y: 7,
            symbol: '&#9820;',
            isDead: false
        },
        knight1: {
            x: 1,
            y: 7,
            symbol: '&#9822;',
            isDead: false
        },
        bishop1: {
            x: 2,
            y: 7,
            symbol: '&#9821;',
            isDead: false
        },
        queen: {
            x: 3,
            y: 7,
            symbol: '&#9819;',
            isDead: false
        },
        king: {
            x: 4,
            y: 7,
            symbol: '&#9818;',
            isDead: false
        },
        bishop2: {
            x: 5,
            y: 7,
            symbol: '&#9821;',
            isDead: false
        },
        knight2: {
            x: 6,
            y: 7,
            symbol: '&#9822;',
            isDead: false
        },
        rook2: {
            x: 7,
            y: 7,
            symbol: '&#9820;',
            isDead: false
        },
        pawn1: {
            x: 0,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn2: {
            x: 1,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn3: {
            x: 2,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn4: {
            x: 3,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn5: {
            x: 4,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn6: {
            x: 5,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn7: {
            x: 6,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
        pawn8: {
            x: 7,
            y: 6,
            symbol: '&#9823;',
            isDead: false
        },
    }

    const [selectedPiece, setSelectedPiece] = useState()

    const [whiteTeam, setWhiteTeam] = useState(whiteTeamStartingPos)
    const [blackTeam, setBlackTeam] = useState(blackTeamStartingPos)

    return (
        <div className={boardStyle.container}>

            {array.map((row, i) => {
                return array.map((column, i) => {
                    return <div className={(7 - column + row) % 2 == 0 ? boardStyle.black : boardStyle.white} data-x={column} data-y={7 - row}>
                        {`x= ${column} y=${7 - row}`}
                    </div>
                })
            })}

        </div>
    )
}
