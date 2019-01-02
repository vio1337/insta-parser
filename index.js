const fetch = require('node-fetch')
require('dotenv/config')

fetchProfile = async () => {
	let r = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
	let data = await r.json()
	return data.data
}


