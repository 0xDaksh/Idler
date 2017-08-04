var main = require('../index')
const expect = require('chai').expect

describe('Idle Function', () => {
    it('should export a function', () => {
        expect(main).to.be.a('function')
    })
})

describe('Start Idling', () => {
    it('should export an promise', () => {
        expect(main({
            username: '123',
            password: '123',
            twoFactorCode: 'gg',
            gameId: '123'
        })).to.be.a('promise')
    })
})