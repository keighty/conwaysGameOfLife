import {expect} from 'chai'
import {GameBoard} from '../scripts/GameBoard'

describe('GameBoard', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })

  describe('structure', () => {
    let gb

    beforeEach(() => {
      gb = new GameBoard(5, 5)
    })

    it('should load and retrieve a GameBoard of specific dimensions', () => {
      expect(gb.getDimensions()).to.eql [5, 6]
    })

    it('should allow retrieval of a single unit of the GameBoard', () => {
      const unit = gb.getUnit(1, 1)
      console.log(unit)
      expect(unit.location).to.be [1, 1]
      expect(unit.empty).to.be.true
    })

    xit('should retrieve unit neighbours', () => {
      const unit = gb.getUnit(1, 1)
      const neighbours = unit.getNeighbours()
      expect(neighbours.length).to.eql(8)
    })
  })

})
