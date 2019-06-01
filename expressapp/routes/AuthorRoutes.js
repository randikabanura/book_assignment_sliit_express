const express = require('express');
const router = express.Router();

const author = require('../models/Author');

router.get('/', (req,res)=>{
    author.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({message:err}));
});

router.post('/newAuthor', (req,res)=>{
    const author1 = author({
        ID: req.body.id,
        FirstName: req.body.first_name,
        LastName: req.body.last_name,
        Nationality: req.body.nationality
    })

    author1.save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({message:err}));
})

module.exports = router