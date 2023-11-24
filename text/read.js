const read = filename => {
	const fs = require('fs')
	const render = () => fs.readFileSync(
		filename,
		{encoding: "utf-8"}
	)
	return render()
}


module.exports = read 
