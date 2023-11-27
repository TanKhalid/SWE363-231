const express = require('express')
const app = express()
const port = 7003

app.use(express.static("./public"))

app.use('/', require('./router'))


  
app.listen(port, ()=>{
console.log(`Server is listetning on port ${port}`)
})
