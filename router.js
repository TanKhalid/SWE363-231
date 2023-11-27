const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()



router.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,"./SWE363.html"))
})

 router.get('/details', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./details.html"))
 })

 router.get('/contact', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./contactUs.html"))
 })

router.get('/suggest', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./suggestions.html"))
})

router.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found :(")
})

module.exports = router