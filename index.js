const fetch = require('node-fetch')
require('dotenv/config')

DATA = []

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	for (let i=0; i<=9; i++) {
		DATA.push(r[i].images.standard_resolution.url)
	}
})

