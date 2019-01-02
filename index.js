const JSSoup = require('jssoup').default
const https = require('https')



https.get('https://www.instagram.com/edrecoveryroots/', (resp) => {
	
	let data = ''
	resp.on('data', (chunk) => {
		data += chunk
	})

  	resp.on('end', () => {
  		const soup = new JSSoup(data)
  		console.log(soup)
    	// console.log(JSON.parse(data).explanation)
  	})

}).on("error", (err) => {

  console.log("Error: " + err.message);

})
