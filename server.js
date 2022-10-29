const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/routes');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use('/api', movieRoutes);


app.listen(4000, ()=> {
    console.log('Server is running on port 4000');
});