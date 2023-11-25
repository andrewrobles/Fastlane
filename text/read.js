const read = text => {
	return	text.split(/\n/) 
}

/* 
		getText('1.txt')
		'a\nb\n'
*/
const getText = filename => {
	const fs = require('fs')
	const render = () => fs.readFileSync(
		filename,
		{encoding: "utf-8"}
	)
	return render()
}


module.exports = read 
