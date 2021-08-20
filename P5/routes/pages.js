const express = require("express");
const router = express.Router();
const path = require('path')
router.get('/page1', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/HTML/index1.html' ))
})
router.get('/page2', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/HTML/index2.html' ))
})
router.get('/page3', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/HTML/index3.html' ))
})
router.get('/page4', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/HTML/index4.html' ))
})
router.get('/page5', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'../public/HTML/index5.html' ))
})


module.exports = router;
