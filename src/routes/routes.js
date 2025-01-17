const express = require('express')
const multer = require('multer')
const { createuser, getalluser } = require('../controller/usercontroller');
const {createshopkeeper} = require('../controller/shopkeepeerController.js');
const { validUserData } = require('../middleware/validUser.js');


const router = express.Router();

const upload = multer({ storage: multer.diskStorage({}) });

//User APi's
router.post('/create', upload.single("profileimg"), validUserData, createuser);
router.get('/getdata', getalluser);


//Shopkeeper APi's
router.post('/createshopkeeper', upload.single("profileimg"), validUserData, createshopkeeper);


router.all('/*', (req, res) => {
    return res.status(400).send({ status: false, msg: "Invalid URL" })
})

module.exports = router;