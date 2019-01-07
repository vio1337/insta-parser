# InstaParser

---

Fetch + Render Instagram Media
Photo by Thought Catalog on UnsplashIf you have ever tried fetching or scraping your Instagram profile, you probably have simultaneously been presented with the agonizing AuthO hoops - through which you are required to jump if you want a JSON API of your Instagram account.
From a security perspective, this is reassuring. The mandatory clearance prior to granting detailed access to personal data provides some level of comfort because it ensures there is a record of every account wanting to obtain the company's client's content.
From a developer perspective, I resented the hoops. In resonance with many of my technical peers however, I enjoy exercising great mental power to derive simpler solutions. So like two six-year-olds duking it out over who goes down the big slide first, this Instagram process provoked: do you really think you can make this easy?
My rebuttal? Of course.
Whether educational, personal or curiosity driven, hopefully the following steps alleviate some of the headache accompanied with accessing your Instagram data.
Step 1
Sign in to your Instagram account from your desktop.
Step 2
Go to Instagram's developer hub. You can do that via google or just click here. The landing page should look like the image below. Once arriving, click Register Your Application.
Step 3
In the top right corner of your screen, click the green button that says Register a New Client. This should take you to a page that looks like this…


---

For this next portion, I used a service called Elfsight, which served as a free redirect landing page so that, instead of authenticating through your web app, you can just grab your profile's API.
Now, I am relentlessly suspicious granting third-party-apps permission to my data. But after reading Elfsight's privacy policy, there was little difference in what they would gain access when to compared to what was already available on a public profile. You can also revoke access from any third-party app at any time under your profile page by clicking the settings icon, then Authorized Apps. 
If this doesn't feel good to you, there are Instagram plugins like Instafeed.js and Spectragram.js (plus a few more) that provide simple API media rendering.
Step 4
Fill out the form - Application Name, Description, Website URL and Valid redirect URIs are the only required fields.
The official post for integrating Elfsight mentioned filling in the Website URL and the Valid redirect URIs field with the the following web address:
https://elfsight.com/service/generate-istagram-access-token/
However, I added it only to the Valid redirect URIs field and the outcome was the same. So regarding which to do, the choice is yours.
Step 5
Once you click the green Register button, you will be directed back to the main app portal, which should look something like the image below. Once here, click the Manage button.
Step 6
Make sure your app's portal page has a Client ID and Client Secret. You'll need both for the next step.
Step 7
Open a new tab with this link to Elfsight. The landing page will have two fields: one for your Client ID and the other for your Client Secret. Now go wild and copy/paste those guys.
Step 8
Authorize and save your new access token in a text editor.



---

Now that you have your access token, in the following section I am going to go over how to render your content to your website. For my particular use case, I wanted to render a basic HTML template for an email campaign with the media from my Instagram business profile.
For an overall glance, feel free to sift through the Github repo - or clone it and manipulate it to your specific use case.
Step 9
Open your terminal and mkdir new-app.
Step 10
a. In your new-app folder, touch index.html index.js, then npm init
b. If you want make an HTTP request in Node using http, this article has a nice breakdown and the docs. If you want to use fetch (I use fetch in the example below), you'll want to also npm install --save node-fetch or yarn add node-fetch.
c. If you're uploading your code to a public repository (like Github) and want to keep your access token hidden, we will create some environment variables by npm install --save dotenv or yarn add dotenv. You will also want to create two files in the app's parent directory: .gitignore and .env

Step 11
In the .gitignore file, on two separate lines add: node_modules and .env
Step 12
In the .env file, create an all caps global variable name. Something clever like TOKEN will do. If you're like me and need incredibly explicit instruction, it should look something like…
TOKEN = 09u3094u3.aCcESstOKen.02748d8w7.morerandomness
Step 13 
Next, open the index.js in your text editor and add the following code…
// allows access to fetch
const fetch = require('node-fetch')
// enables the use of env variables 
require('dotenv/config')
// make your fetch request with your access token
fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.TOKEN}`)
.then(r=> r.json())
.then(r=> r.data)
.then(r=> {
// renders the 9 most recent posts
let obj = {}
for (let i=0; i<=8; i++) {
obj[r[i].images.standard_resolution.url] = r[i].link
}
return obj
})
.then(r=> {
// this generates the HTML I want to paste into my email campaign
let html = Object.keys(r).map((x)=> {
return `<a href="${r[x]}"><img class="insta-pic" src="${x}"/></a>`
})
console.log(html)
})
same as the code above- not copy/paste-able but moderately more aesthetic (and readable)Step 13. Running node index.js spits out the code below, which I then, (1) copy/pasted into index.html file to initially create a basic styling and rendering template, so that I could later (2) copy/paste the console.log(html) output directly into my email campaign.

terminal output and sample html template to add to an email campaign
Fun tip: Mailchimp has an inline CSS styler that allows you to turn the above html template into inline styling - convenient for when you don't want to write the same 20-something characters 9+ times. 


---

{And that's it! If you have any questions or suggestions, please feel free to drop them below. Thanks for reading and may your coding adventures consist of minimal, literal head-banging (and many a 70s rock head bang).