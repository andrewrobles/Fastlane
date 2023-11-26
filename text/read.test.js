const read = require('./read')
test('reads two lines and new line', () => {
	expect(read('a\nb\n')).toStrictEqual(['a', 'b'])
})
test('reads two lines', () => {
	expect(read('a\nb')).toStrictEqual(['a', 'b'])
})
test('reads one line and new line', () => {
	expect(read('a\n')).toStrictEqual(['a'])
})
test('reads one line', () => {
	expect(read('a')).toStrictEqual(['a'])
})
