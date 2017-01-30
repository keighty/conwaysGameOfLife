import Unit from './GameUnit'

export class GameBoard {

  constructor(width, height) {
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
    if(x >= 0 && x < this._width)
      return this._board[x][y]
  }

  getNeighbours(unit) {
    const [x, y] = unit.location
    return {
       W: this.getUnit(x - 1, y),
       E: this.getUnit(x + 1, y),
       N: this.getUnit(x    , y - 1),
       S: this.getUnit(x    , y + 1),
      NE: this.getUnit(x + 1, y - 1),
      NW: this.getUnit(x - 1, y - 1),
      SW: this.getUnit(x - 1, y + 1),
      SE: this.getUnit(x + 1, y + 1),
    }
  }
}
