const { greet, bye } = require('../../service/greetings')

test('greet', () => {
    expect(greet('John')).toBe('Hello, John!')
})

test('bye', () => {
    expect(bye('John')).toBe('Goodbye, John!')
})