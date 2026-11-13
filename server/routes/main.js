const express = require('express');
const router = express.Router();




router.get('', (req, res) => {
    const local = {
        title: "best healthcare blog",
        description: "The world best healthcare blog website"
    };

    try{
        res.render('index', {local});
    }catch(error) {
        console.log(error)
    };
});

router.get('/About', (req, res) => {
    res.render('About');
});

router.get('/Blog', (req, res) => {
    res.render('Blog');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;