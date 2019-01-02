const fetch = require('node-fetch')
require('dotenv/config')

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	const arr = []
	for (let i=0; i<=9; i++) {
		arr.push(r[i].images.standard_resolution.url)
	}
	return arr
})
.then(r=> {
	let url = r.map(url=> {
		return `<img class="insta-pic" src="${url}"/>`
	})
	console.log(url)
})
