const fetch = require('node-fetch')
require('dotenv/config')

fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
	const arr = []
	for (let i=0; i<=8; i++) {
		let obj = {}
		let photo = r[i].images.standard_resolution.url
		let link = r[i].link
		obj[photo] = link
		arr.push(obj)
	}
	return arr
})
.then(r=> {
	let html = r.map((x, i)=> {
		let photo = Object.keys(x).toString()
		let url = Object.values(x).toString()
		return `<a href="${url}"><img class="insta-pic" src="${photo}"/></a>`
	})
	console.log(html)
})
