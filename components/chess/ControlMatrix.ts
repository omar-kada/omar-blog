import Chess from 'chess.js'
const DEFAULT_VALUE = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

const WEIGHTS = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 10,
}

export class ControlMatrix {
  private _control: number[][]
  private _game: Chess

  constructor(control: number[][] = DEFAULT_VALUE) {
    this._control = control
  }

  public getBySquare(square: string): number {
    return this._control[7 - square.charCodeAt(1) + '1'.charCodeAt(0)][
      square.charCodeAt(0) - 'a'.charCodeAt(0)
    ]
  }

  private incrementSquare(square: string, value: number): void {
    this._control[7 - square.charCodeAt(1) + '1'.charCodeAt(0)][
      square.charCodeAt(0) - 'a'.charCodeAt(0)
    ] += value
  }

  private incrementIfValid(x: number, y: number, square: { color: string; type: string }): void {
    const coeff = square.color === 'b' ? -1 : 1

    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
      let val = 1
      const dest = this._game.board()[y][x]
      switch (square.type) {
        case 'p':
          val = 10
          break
        case 'n':
          val = 5
          break
        case 'b':
          val = 5
          break
        case 'r':
          val = 3
          break
        case 'q':
          val = 1
          break
        case 'k':
          val = 1
          break
      }
      console.log({
        dest,
        square,
        val,
      })
      if (
        dest &&
        (WEIGHTS[dest?.type] ?? 0) > WEIGHTS[square.type] &&
        dest?.color !== square.color
      ) {
        this._control[y][x] += 20 * coeff
      } else {
        this._control[y][x] += val * coeff
      }
    }
  }

  calculateControl(game: Chess): number[][] {
    const row = Array(8).fill(0)
    const control = [[...row], [...row], [...row], [...row], [...row], [...row], [...row], [...row]]
    this._control = control
    this._game = game
    game.board().forEach((row, y) => {
      row.forEach((square, x) => {
        if (square?.type == null) return
        console.log(square.type)
        const coeff = square.color === 'b' ? -1 : 1
        switch (square.type) {
          case 'p':
            this.incrementIfValid(x + 1, y - coeff, square)
            this.incrementIfValid(x - 1, y - coeff, square)

            break
          case 'n':
            this.incrementIfValid(x + 1, y + 2, square)
            this.incrementIfValid(x + 1, y - 2, square)
            this.incrementIfValid(x + 2, y + 1, square)
            this.incrementIfValid(x + 2, y - 1, square)
            this.incrementIfValid(x - 1, y + 2, square)
            this.incrementIfValid(x - 1, y - 2, square)
            this.incrementIfValid(x - 2, y + 1, square)
            this.incrementIfValid(x - 2, y - 1, square)
            break
          case 'b':
            this.impactBishop(x, y, game, square)
            break

          case 'r':
            this.impactRook(x, y, game, square)
            break
          case 'q':
            this.impactRook(x, y, game, square)
            this.impactBishop(x, y, game, square)

            break
          case 'k':
            this.incrementIfValid(x + 1, y, square)
            this.incrementIfValid(x + 1, y + 1, square)
            this.incrementIfValid(x + 1, y - 1, square)
            this.incrementIfValid(x, y + 1, square)
            this.incrementIfValid(x, y - 1, square)
            this.incrementIfValid(x - 1, y + 1, square)
            this.incrementIfValid(x - 1, y, square)
            this.incrementIfValid(x - 1, y - 1, square)
            break
          /*
            case 'k': {
            }*/
        }
      })
      console.log(control)
    })
    return control
  }

  private impactRook(x: number, y: number, game: Chess, square: { color: string; type: string }) {
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x + i, y, square)
      if (game.board()?.[y]?.[x + i] != null && !['r', 'q'].includes(game.board()[y][x + i].type))
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x, y - i, square)
      if (game.board()?.[y - i]?.[x] != null && !['r', 'q'].includes(game.board()[y - i][x].type))
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x - i, y, square)
      if (game.board()?.[y]?.[x - i] != null && !['r', 'q'].includes(game.board()[y][x - i].type))
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x, y + i, square)
      if (game.board()?.[y + i]?.[x] != null && !['r', 'q'].includes(game.board()[y + i][x].type))
        break
    }
  }

  private impactBishop(x: number, y: number, game: Chess, square: { color: string; type: string }) {
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x + i, y + i, square)
      if (
        game.board()?.[y + i]?.[x + i] != null &&
        !['b', 'q'].includes(game.board()[y + i][x + i].type)
      )
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x + i, y - i, square)
      if (
        game.board()?.[y - i]?.[x + i] != null &&
        !['b', 'q'].includes(game.board()[y - i][x + i].type)
      )
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x - i, y - i, square)
      if (
        game.board()?.[y - i]?.[x - i] != null &&
        !['b', 'q'].includes(game.board()[y - i][x - i].type)
      )
        break
    }
    for (let i = 1; i < 8; i++) {
      this.incrementIfValid(x - i, y + i, square)
      if (
        game.board()?.[y + i]?.[x - i] != null &&
        !['b', 'q'].includes(game.board()[y + i][x - i].type)
      )
        break
    }
  }
}
