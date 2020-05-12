import { validateUrl } from './urlValidator'

describe('urlValidator', () => {
    test('It should match, because the URL is a full URL', () => {
        const url = 'https://example.com'
        
        const result = validateUrl(url)
        
        expect(result).toBe(true)
    })

    test('It should match without explicitly written http or https protocols', () => {
        const url = 'example.com'
        
        const result = validateUrl(url)
        
        expect(result).toBe(true)
    })

    test('It should not match, because the URL is invalid', () => {
        const url = 'fsadfasfassom'
        
        const result = validateUrl(url)
        
        expect(result).toBe(false)
    })
})