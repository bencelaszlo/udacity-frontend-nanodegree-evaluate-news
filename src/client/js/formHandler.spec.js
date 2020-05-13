import { probabilityToPercentage } from './formHandler'

describe('probabilityToPercentage', () => {
    test('It should be 50.12%', () => {
        const probability = 0.501241512125124124

        const result = probabilityToPercentage(probability)

        expect(result).toBe('50.12%')
    })
})