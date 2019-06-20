const express = require('express');
const Joi = require('joi');
const port = process.env.PORT || 4000;
const app = express();

// middleware 
app.set('view engine', 'ejs');
app.use(express.json())

//index
app.get('/', (req, res) => {
    const drinks = [
        { name: 'bloody mary ', drunkness: 3 },
        { name: 'martini', drunkness: 4 },
        { name: 'Shots', drunkness: 5 },
    ]
    const tagline = "any of your that havent"
    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
})

//about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(port, () => console.log(`Up and running on port ${port}`))