const fetch = require('node-fetch')
require('dotenv/config')

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	let obj = {}
	for (let i=0; i<=8; i++) {
		obj[r[i].images.standard_resolution.url] = r[i].link
	}
	return obj
})
.then(r=> {
	let html = Object.keys(r).map((x)=> {	
		return `<a href="${r[x]}"><img style="height: 175px; width:175px" src="${x}"/></a>`
	})
	console.log(html)
})
