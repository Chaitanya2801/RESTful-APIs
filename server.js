const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/routes');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use('/api', movieRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/playerDB');
mongoose.connection.once('open', ()=> {
    console.log('Connection established with mongoDB')
}).on('error', (err)=> {
    console.log(err)
});

app.listen(4000, ()=> {
    console.log('Server is running on port 4000');
});