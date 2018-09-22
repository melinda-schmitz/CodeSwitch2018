const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;


//Body Parser middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CONNECT  TO MONGODB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server running on port ${port}`));

