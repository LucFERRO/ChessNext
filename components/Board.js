import React, { useEffect, useState } from 'react'
import boardStyle from '../styles/Board.module.scss'

export default function Board() {

    let array = [0, 1, 2, 3, 4, 5, 6, 7]

    let whiteTeamStartingPos = {
        rook1: {
            x: 0,
            y: 0,
            symbol: '9814',
            isDead: false
        },
        knight1: {
            x: 1,
            y: 0,
            symbol: '9816',
            isDead: false
        },
        bishop1: {
            x: 2,
            y: 0,
            symbol: '9815',
            isDead: false
        },
        queen: {
            x: 3,
            y: 0,
            symbol: '9813',
            isDead: false
        },
        king: {
            x: 4,
            y: 0,
            symbol: '9812',
            isDead: false
        },
        bishop2: {
            x: 5,
            y: 0,
            symbol: '9815',
            isDead: false
        },
        knight2: {
            x: 6,
            y: 0,
            symbol: '9816',
            isDead: false
        },
        rook2: {
            x: 7,
            y: 0,
            symbol: '9814',
            isDead: false
        },
        pawn1: {
            x: 0,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn2: {
            x: 1,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn3: {
            x: 2,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn4: {
            x: 3,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn5: {
            x: 4,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn6: {
            x: 5,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn7: {
            x: 6,
            y: 1,
            symbol: '9817',
            isDead: false
        },
        pawn8: {
            x: 7,
            y: 1,
            symbol: '9817',
            isDead: false
        },
    }

    let blackTeamStartingPos = {
        rook1: {
            x: 0,
            y: 7,
            symbol: '9820',
            isDead: false
        },
        knight1: {
            x: 1,
            y: 7,
            symbol: '9822',
            isDead: false
        },
        bishop1: {
            x: 2,
            y: 7,
            symbol: '9821',
            isDead: false
        },
        queen: {
            x: 3,
            y: 7,
            symbol: '9819',
            isDead: false
        },
        king: {
            x: 4,
            y: 7,
            symbol: '9818',
            isDead: false
        },
        bishop2: {
            x: 5,
            y: 7,
            symbol: '9821',
            isDead: false
        },
        knight2: {
            x: 6,
            y: 7,
            symbol: '9822',
            isDead: false
        },
        rook2: {
            x: 7,
            y: 7,
            symbol: '9820',
            isDead: false
        },
        pawn1: {
            x: 0,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn2: {
            x: 1,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn3: {
            x: 2,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn4: {
            x: 3,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn5: {
            x: 4,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn6: {
            x: 5,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn7: {
            x: 6,
            y: 6,
            symbol: '9823',
            isDead: false
        },
        pawn8: {
            x: 7,
            y: 6,
            symbol: '9823',
            isDead: false
        },
    }

    const [selectedPiece, setSelectedPiece] = useState({
        x: null,
        y: null,
        symbol: null,
        isDead: null
    })

    const [whiteTeam, setWhiteTeam] = useState(whiteTeamStartingPos)
    const [blackTeam, setBlackTeam] = useState(blackTeamStartingPos)

    const testGlobal = (x, y) => {
        Object.keys(whiteTeam).forEach(piece => {
            if (x != whiteTeam[piece].x || y != whiteTeam[piece].y) return
            console.log(piece, String.fromCharCode(whiteTeam[piece].symbol))
            return String.fromCharCode(whiteTeam[piece].symbol)
        })
    }

    const piecePlacement = (x, y) => {

        //Ne marche pas
        // let pieces = ["rook1", "knight1", "bishop1", "queen", "king", "bishop2", "knight2", "rook2", "pawn1", "pawn2", "pawn3", "pawn4", "pawn5", "pawn6", "pawn7", "pawn8"]
        // pieces.forEach( piece => {
        //     if (x == whiteTeam[piece].x && y == whiteTeam[piece].y) {
        //         console.log(String.fromCharCode(whiteTeam[piece].symbol))
        //         return String.fromCharCode(whiteTeam[piece].symbol)
        //     }
        // })

        // White team
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.knight1.x && y == whiteTeam.knight1.y) return String.fromCharCode(whiteTeam.knight1.symbol)
        if (x == whiteTeam.bishop1.x && y == whiteTeam.bishop1.y) return String.fromCharCode(whiteTeam.bishop1.symbol)
        if (x == whiteTeam.queen.x && y == whiteTeam.queen.y) return String.fromCharCode(whiteTeam.queen.symbol)
        if (x == whiteTeam.king.x && y == whiteTeam.king.y) return String.fromCharCode(whiteTeam.king.symbol)
        if (x == whiteTeam.bishop2.x && y == whiteTeam.bishop2.y) return String.fromCharCode(whiteTeam.bishop2.symbol)
        if (x == whiteTeam.knight2.x && y == whiteTeam.knight2.y) return String.fromCharCode(whiteTeam.knight2.symbol)
        if (x == whiteTeam.rook2.x && y == whiteTeam.rook2.y) return String.fromCharCode(whiteTeam.rook2.symbol)

        if (x == whiteTeam.pawn1.x && y == whiteTeam.pawn1.y) return String.fromCharCode(whiteTeam.pawn1.symbol)
        if (x == whiteTeam.pawn2.x && y == whiteTeam.pawn2.y) return String.fromCharCode(whiteTeam.pawn2.symbol)
        if (x == whiteTeam.pawn3.x && y == whiteTeam.pawn3.y) return String.fromCharCode(whiteTeam.pawn3.symbol)
        if (x == whiteTeam.pawn4.x && y == whiteTeam.pawn4.y) return String.fromCharCode(whiteTeam.pawn4.symbol)
        if (x == whiteTeam.pawn5.x && y == whiteTeam.pawn5.y) return String.fromCharCode(whiteTeam.pawn5.symbol)
        if (x == whiteTeam.pawn6.x && y == whiteTeam.pawn6.y) return String.fromCharCode(whiteTeam.pawn6.symbol)
        if (x == whiteTeam.pawn7.x && y == whiteTeam.pawn7.y) return String.fromCharCode(whiteTeam.pawn7.symbol)
        if (x == whiteTeam.pawn8.x && y == whiteTeam.pawn8.y) return String.fromCharCode(whiteTeam.pawn8.symbol)


        // Black team
        if (x == blackTeam.rook1.x && y == blackTeam.rook1.y) return String.fromCharCode(blackTeam.rook1.symbol)
        if (x == blackTeam.knight1.x && y == blackTeam.knight1.y) return String.fromCharCode(blackTeam.knight1.symbol)
        if (x == blackTeam.bishop1.x && y == blackTeam.bishop1.y) return String.fromCharCode(blackTeam.bishop1.symbol)
        if (x == blackTeam.queen.x && y == blackTeam.queen.y) return String.fromCharCode(blackTeam.queen.symbol)
        if (x == blackTeam.king.x && y == blackTeam.king.y) return String.fromCharCode(blackTeam.king.symbol)
        if (x == blackTeam.bishop2.x && y == blackTeam.bishop2.y) return String.fromCharCode(blackTeam.bishop2.symbol)
        if (x == blackTeam.knight2.x && y == blackTeam.knight2.y) return String.fromCharCode(blackTeam.knight2.symbol)
        if (x == blackTeam.rook2.x && y == blackTeam.rook2.y) return String.fromCharCode(blackTeam.rook2.symbol)

        if (x == blackTeam.pawn1.x && y == blackTeam.pawn1.y) return String.fromCharCode(blackTeam.pawn1.symbol)
        if (x == blackTeam.pawn2.x && y == blackTeam.pawn2.y) return String.fromCharCode(blackTeam.pawn2.symbol)
        if (x == blackTeam.pawn3.x && y == blackTeam.pawn3.y) return String.fromCharCode(blackTeam.pawn3.symbol)
        if (x == blackTeam.pawn4.x && y == blackTeam.pawn4.y) return String.fromCharCode(blackTeam.pawn4.symbol)
        if (x == blackTeam.pawn5.x && y == blackTeam.pawn5.y) return String.fromCharCode(blackTeam.pawn5.symbol)
        if (x == blackTeam.pawn6.x && y == blackTeam.pawn6.y) return String.fromCharCode(blackTeam.pawn6.symbol)
        if (x == blackTeam.pawn7.x && y == blackTeam.pawn7.y) return String.fromCharCode(blackTeam.pawn7.symbol)
        if (x == blackTeam.pawn8.x && y == blackTeam.pawn8.y) return String.fromCharCode(blackTeam.pawn8.symbol)
    }

    // Déplacement de pièce 

    // const movePiece = (piece, newX, newY) => {
    //     const oldWhiteTeam = {...whiteTeam[piece]}
    //     oldWhiteTeam[piece].x = newX
    //     // oldWhiteTeam[piece].y = newY

    //     setWhiteTeam({ [piece].x: oldWhiteTeam})
    // }

    
    // movePiece('queen', 4,3)
    // console.log('new',whiteTeam)

    return (
        <div className={boardStyle.container}>

            {array.map((row, i) => {
                return array.map((column, i) => {
                    return <div className={(7 - column + row) % 2 == 0 ? boardStyle.blackTile : boardStyle.whiteTile} data-x={column} data-y={7 - row}>
                        <p className={`${boardStyle.piece} ${boardStyle.blackPiece}`}>
                            {piecePlacement(column, 7 - row)}
                        </p>
                    </div>
                })
            })}
        </div>
    )
}
