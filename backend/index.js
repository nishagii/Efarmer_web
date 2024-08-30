const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());//every request that get from responce will be in json format
app.use(cors());//to allow cross origin request

//database connection
const mongoURI = "mongodb://127.0.0.1:27017/efarmer";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("MongoDB Connected uttooo");
    })
.catch((err) => {console.log(err);});

//API creation
app.get('/', (req, res) => {
    res.send("Express App is Running uttooo")
})

//image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null,'${file.fieldname}_${Date.now()}${$path.extname(file.originalname)')
    }
})

const upload=multer({storage:storage})

//create upload endpoint














app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is running on port: ${port}`);
    } else {
        console.log("Error found" + error);
    }
})