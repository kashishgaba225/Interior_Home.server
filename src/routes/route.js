const express= require('express');
const {test}=require('../controller/userController.js')
const route=express();



route.post('/test',test)

module.exports=route;