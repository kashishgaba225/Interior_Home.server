const express = require('express');
const mongoose= require('mongoose');
const route=require('./routes/route.js')

const app= express()

app.use(express.json())

const MongoDbURL='mongodb+srv://kashishgaba225:j9p8n7JWNuxgZt1t@cluster0.7bvgg.mongodb.net/Interior_Design'
const port=5000 || process.env.PORT;

mongoose.connect(MongoDbURL)
.then(()=>{console.log('MongoDb Connected')})
.catch((e)=>{console.log(`MongoDb Error ${e}`)})

app.use('/',route)

app.listen(port,()=>{console.log(`Server is Running ${port}`)})