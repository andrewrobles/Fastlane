/* 
		const read = require('./read')
		read('1.txt')
		'a\nb\n'
*/

const read = filename => {
	const fs = require('fs')
	const render = () => fs.readFileSync(
		filename,
		{encoding: "utf-8"}
	)
	return render()
}


module.exports = read 
