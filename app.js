const express= require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./database/database');
const homeRouter = require('./Routes/homeRoutes');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT;


app.use(bodyParser.json());
app.use(homeRouter);







app.listen(PORT, ()=>{
    console.log('SERVER started on port',PORT)
})