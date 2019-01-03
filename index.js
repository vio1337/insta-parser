const fetch = require('node-fetch')
require('dotenv/config')

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	let obj = {}
	for (let i=0; i<=8; i++) {
		let photo = r[i].images.standard_resolution.url
		let link = r[i].link
		obj[photo] = link
	}
	return obj
})
.then(r=> {
	let html = Object.keys(r).map((x)=> {	
		return `<a href="${r[x]}"><img class="insta-pic" src="${x}"/></a>`
	})
	console.log(html)
})
