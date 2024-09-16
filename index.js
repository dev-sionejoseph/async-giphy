require('dotenv').config();

// Print out value of API key stored in .env file
const apiKey = process.env.API_KEY
//console.log(apiKey);

async function getImages(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
    const parsed = await response.json()
    
    console.log(await parsed.data[0].images.original.url) // testing to be sure I'm pulling the correct data and cnavigating it properly.
}

getImages()