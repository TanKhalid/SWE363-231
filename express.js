const express = require('express')
const path = require('path')
const app = express()
app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,"./SWE363.html"))
})

 app.get('/details', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./details.html"))
 })

 app.get('/contact', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./contactUs.html"))
 })

app.get('/suggest', (req, res) => {
     res.status(200).sendFile(path.resolve(__dirname,"./suggestions.html"))
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found :(")
})
app.listen(5200, ()=>{
    console.log("Sever is listening on port 5100...")
})