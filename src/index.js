const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
require('dotenv').config()

const app = express();
app.use(express.json());


const port = 5000 || process.env.PORT

mongoose.connect(process.env.MongoDBURL)
    .then(() => { console.log('MongoDdb connected') })
    .catch((e) => { console.log(`error in MongoDb ${e}`) })

app.use('/', routes)

app.listen((port), () => { console.log(`server connected ${port}`) })