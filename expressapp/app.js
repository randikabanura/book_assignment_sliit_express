const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());



//Import book routes
const BookRoutes = require('./routes/BooksRoutes');
app.use('/books',BookRoutes);

//Import author routes
const AuthorRoutes = require('./routes/AuthorRoutes');
app.use('/authors', AuthorRoutes);

//Connect to mongoDB
mongoose.connect('mongodb+srv://admin:admin@clustertest-fyroa.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, ()=>{
    console.log("Connected to the database");
})

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server started")
})