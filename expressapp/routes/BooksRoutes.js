const express = require('express');
const router = express.Router();

const book = require('../models/Book');

router.get('/', (req,res)=>{
    book.find()
        .then(data => res.status(200).json(data))
        .catch(err=>res.send(500).json({message: err}))
})

router.get('/:author1', (req,res)=>{

    book.find({Author: req.params.author1})
        .then(data => res.status(200).json(data))
        .catch(err=>res.send(500).json({message: err}))
})

router.post('/newBook', (req,res)=>{
    console.log(req.body.name)
    const book1 = book({
        Name: req.body.name,
        ISBN: req.body.isbn,
        Author: req.body.author,
        Price: req.body.price,
        YearOfPublication: req.body.year,
        Publisher: req.body.publisher
    })

    console.log(book1)

    book1.save()
        .then(data => res.status(200).json(data))
        .catch(err=>res.send(500).json({message: err}))
})

module.exports = router