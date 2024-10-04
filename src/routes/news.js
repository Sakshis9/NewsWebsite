const express = require('express')
const axios = require('axios')
const newsRouter = express.Router();

newsRouter.get('', async(req, res) => {
    // res.render('news');
    try {
        // const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d47fb76edcde43c8937b995ce5148a17`)
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts`)
        // console.log(newsAPI.data)
        res.render('news', {articles : newsAPI.data})
    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }
        else if(err.request){
            console.log(err.request)
        }
        else{
            console.log("Error", err.message)
            console.log("Error", err.message)
        }
    }
})

module.exports = newsRouter

// Your API key is: d47fb76edcde43c8937b995ce5148a17
