const fs = require('fs')
fs.readFile('1.txt', (error, text) => {
	if (error) throw error
	console.log(text.toString())
})
