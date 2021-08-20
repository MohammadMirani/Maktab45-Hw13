const express = require('express')
const router  = express.Router()

router.get('/',(req, res)=>{
    res.status(200).send("Hello World")
})
router.get('/profile',(req,res)=>{
    res.status(200).send("Profile")
})
router.get('/Home',(req,res)=>{
    res.status(200).send("Home")
})
router.get('/about',(req,res)=>{
    res.status(200).send("about")
})
router.get('/contact',(req,res)=>{
    res.status(200).send("contact")
})


module.exports = router 