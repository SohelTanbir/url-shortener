const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDatabase = require('./database/databaseConnecion');

const app  = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());
app.use(express.json());
// Database connection
connectDatabase();

const urlRoute = require('./routes/urlRoute'); 

// routes
app.get("/", (req, res) => {
    res.send("Welcome to URL Shortener App!");
})

app.use(urlRoute);


// default Error Handler
const errorHandler  = (err, req, res, next)=>{
    if(req.headersSent){
         return next(err.message);
    }
    res.status(500).json({
        success:false,
        message:err
    })
 }

 app.use(errorHandler);

// listen on port 5000
app.listen(5000, ()=> {
    console.log("listening on port 5000");
})


