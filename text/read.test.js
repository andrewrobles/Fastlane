const read = require('./read')

test('converts string into array of strings', () => {
	expect(read('a')).toStrictEqual(['a'])
})
