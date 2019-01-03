const fetch = require('node-fetch')
require('dotenv/config')

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	const arr = []
	let obj = {}
	for (let i=0; i<=8; i++) {
		let photo = r[i].images.standard_resolution.url
		let link = r[i].link
		obj[photo] = link
		arr.push(obj)
	}
	return arr
})
.then(r=> {
	let url = Object.keys(r).map((photo,i)=> {
		return `<img class="insta-pic" src="${url}"/>`
	})
	console.log(r)
})
