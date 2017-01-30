import Unit from './GameUnit'

export class GameBoard {

  constructor(height, width) {
    this._height = height
    this._width = width
    this._board = this.setupGameBoard()
  }

  setupGameBoard() {
    const x = new Array(this._height)
    const y = (new Array(this._width + 1)).join('0').split('')

    for (let i = 0; i < x.length; i++) {
      x[i] = y.map((square, index) => new Unit(i, index))
    }
    return x
  }

  getDimensions() {
    return [this._height, this._width]
  }

  getUnit(x, y) {
    return this._board[x][y]
  }
}
