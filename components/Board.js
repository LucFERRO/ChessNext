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
        x: 3,
        y: 0,
        symbol: '9820',
        isDead: false
    })

    const [selectedPiece1, setSelectedPiece1] = useState({
        x: 0,
        y: 0,
        symbol: '9820',
        isDead: false
    })
    const [selectedPiece2, setSelectedPiece2] = useState({
        x: 1,
        y: 0,
        symbol: '9822',
        isDead: false
    })

    const [whiteTeam, setWhiteTeam] = useState(whiteTeamStartingPos)
    const [blackTeam, setBlackTeam] = useState(blackTeamStartingPos)

    const piecePlacement = async (x, y) => {
        let res = await Object.keys(whiteTeam).forEach(piece => {
            console.log('test', whiteTeam[piece]['symbol'])
            // if (x != whiteTeam[piece]['x'] || y != whiteTeam[piece]['y']) return
            if (x == whiteTeam[piece].x && y == whiteTeam[piece].y) return whiteTeam[piece]
        })
        return res.symbol
    }

    const test1 = (x, y) => {
        if (x == selectedPiece.x && y == selectedPiece.y) return String.fromCharCode(selectedPiece.symbol)
        // Object.keys(whiteTeam).forEach( piece => {
        //     if (x != whiteTeam[piece].x || y != whiteTeam[piece].y) return
        //     return whiteTeam[piece].symbol
        // })
        return 
    }

    const testGlobal = (x,y) => {
        Object.keys(whiteTeam).forEach( piece => {
            if (x != whiteTeam[piece].x || y != whiteTeam[piece].y) return
            console.log(piece, String.fromCharCode(whiteTeam[piece].symbol))
            return String.fromCharCode(whiteTeam[piece].symbol)
        })
    }


    const remy = (x,y) => {
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.knight1.x && y == whiteTeam.knight1.y) return String.fromCharCode(whiteTeam.knight1.symbol)
        if (x == whiteTeam.bishop1.x && y == whiteTeam.bishop1.y) return String.fromCharCode(whiteTeam.bishop1.symbol)
        if (x == whiteTeam.queen.x && y == whiteTeam.queen.y) return String.fromCharCode(whiteTeam.queen.symbol)
        if (x == whiteTeam.king.x && y == whiteTeam.king.y) return String.fromCharCode(whiteTeam.king.symbol)
        if (x == whiteTeam.bishop2.x && y == whiteTeam.bishop2.y) return String.fromCharCode(whiteTeam.bishop2.symbol)
        if (x == whiteTeam.knight2.x && y == whiteTeam.knight2.y) return String.fromCharCode(whiteTeam.knight2.symbol)
        if (x == whiteTeam.rook2.x && y == whiteTeam.rook2.y) return String.fromCharCode(whiteTeam.rook2.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
        if (x == whiteTeam.rook1.x && y == whiteTeam.rook1.y) return String.fromCharCode(whiteTeam.rook1.symbol)
    }   

    // String.fromCharCode(X)

    return (
        <div className={boardStyle.container}>

            {array.map((row, i) => {
                return array.map((column, i) => {
                    return <div className={(7 - column + row) % 2 == 0 ? boardStyle.black : boardStyle.white} data-x={column} data-y={7 - row}>
                        <p>
                            {testGlobal(column, 7-row)}    
                            {/* o */}
                            {/* {`x= ${column} y=${7 - row}`} */}
                            {/* {test1(column, 7-row)} */}
                           
                            {/* {String.fromCharCode(9820)} */}
                            {/* {remy(column, 7-row)} */}
                        </p>
                    </div>
                })
            })}
        </div>
    )
}
