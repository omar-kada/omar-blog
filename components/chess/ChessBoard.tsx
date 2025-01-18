'use client'

import Chess from 'chess.js'
import { forwardRef, useEffect, useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { CustomSquareProps } from 'react-chessboard/dist/chessboard/types'
import { ControlMatrix } from './ControlMatrix'

export function ChessBoard() {
  function getWindowSize(): number {
    if (typeof window === 'undefined') return 0
    return 0.8 * Math.min(window.innerWidth, window.innerHeight)
  }

  const [size, setSize] = useState<number>(getWindowSize())

  useEffect(() => {
    const updateSize = () => {
      setSize(getWindowSize())
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
  const CustomSquareRenderer: any = forwardRef<HTMLDivElement, CustomSquareProps>((props, ref) => {
    const { children, square, squareColor, style } = props
    return (
      <div
        ref={ref}
        style={{
          ...style,
          position: 'relative',
        }}
      >
        {children}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 6,
            backgroundColor: squareColor === 'black' ? '#064e3b' : '#312e81',
            color: '#fff',
            fontSize: 14,
          }}
        >
          {control.getBySquare(square)}
        </div>
      </div>
    )
  })

  const [game, setGame] = useState(new Chess())
  //'r3r1k1/p4ppp/2p2n2/1p6/3P1qb1/2NQR3/PPB2PP1/R1B3K1 w - - 5 18'
  const [control, setControl] = useState(() => {
    const c = new ControlMatrix()
    c.calculateControl(game)
    return c
  })

  function makeAMove(move) {
    const gameCopy = { ...game } as Chess
    const result = gameCopy.move(move)
    console.log('result', result)
    setGame(gameCopy)
    setControl(new ControlMatrix(control.calculateControl(gameCopy)))
    return result // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return false
    return true
  }

  return (
    <>
      <Chessboard
        id="defaultBoard"
        boardWidth={size}
        customBoardStyle={{
          display: 'flex',
          placeSelf: 'center',
        }}
        customSquareStyles={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
          .map((file) => {
            return [1, 2, 3, 4, 5, 6, 7, 8].map((rank) => {
              const p = control.getBySquare(file + rank)
              return {
                [file + rank]: {
                  backgroundColor:
                    p > 0
                      ? `rgba(0, 255, 0, ${p >= 5 ? (p - 5) / 15 : 0})`
                      : `rgba(255, 0, 0, ${p <= -5 ? Math.abs(p + 5) / 15 : 0})`,
                },
              }
            })
          })
          .flat(2)
          .reduce((acc, val) => {
            return { ...acc, ...val }
          })}
        customSquare={CustomSquareRenderer}
        position={game.fen()}
        onPieceDrop={onDrop}
      />
    </>
  )
}
