var main = require('../index')
const expect = require('chai').expect

describe('Idle Class', () => {
    it('should export a function', () => {
        expect(main).to.be.a('function')
    })
})

describe('Start Idling', () => {
    it('should export an promise', () => {
        expect(new main('gg', 'gg', 123, {method: 'manual'}).idle()).to.be.a('promise')
    })
})