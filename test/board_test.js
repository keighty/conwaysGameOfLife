import {expect} from 'chai'
import {GameBoard} from '../scripts/GameBoard'
import Unit from '../scripts/GameUnit'

describe('GameBoard', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })

  describe('structure', () => {
    const size = 5
    const testX = 1
    const testY = 2
    let gb, unit, neighbours

    beforeEach(() => {
      gb = new GameBoard(size, size)
      unit = gb.getUnit(testX, testY)
      neighbours = gb.getNeighbours(unit)
    })

    it('should load and retrieve a GameBoard of specific dimensions', () => {
      expect(gb.getDimensions()).to.eql [5, 6]
    })

    it('should allow retrieval of a single unit of the GameBoard', () => {
      expect(unit instanceof Unit).to.be.true
      expect(unit.location).to.be [1, 1]
      expect(unit.empty).to.be.true
    })

    it('should return undefined for neighbours out of lower bounds', () => {
      const oob = gb.getUnit(testX - 5, -1)
      expect(oob).to.eql(undefined)
    })

    it('should return undefined for neighbour out of high bounds', () => {
      const oob = gb.getUnit(testX + 20, -1)
      expect(oob).to.eql(undefined)
    })

    it('should retrieve a set of neighbours', () => {
      expect(Object.keys(neighbours).length).to.eql(8)
    })

    it('should return the East neighbour', () => {
      expect(neighbours.E.location).to.deep.eq([2, 2])
    })

    it('should return the West neighbour', () => {
      expect(neighbours.W.location).to.deep.eq([0, 2])
    })

    it('should return the North neighbour', () => {
      expect(neighbours.N.location).to.deep.eq([1, 1])
    })

    it('should return the South neighbour', () => {
      expect(neighbours.S.location).to.deep.eq([1, 3])
    })

    it('should return the NEast neighbour', () => {
      expect(neighbours.NE.location).to.deep.eq([2, 1])
    })

    it('should return the NWest neighbour', () => {
      expect(neighbours.NW.location).to.deep.eql([0,1])
    })

    it('should return the SWest neighbour', () => {
      expect(neighbours.SW.location).to.deep.eql([0, 3])
    })

    it('should return the SEast neighbour', () => {
      expect(neighbours.SE.location).to.deep.eql([2, 3])
    })
  })

})
