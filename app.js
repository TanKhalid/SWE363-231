const express = require('express')
const app = express()


app.use(express.static("./public"))

app.use('/', require('./router'))
app.listen(5202, ()=>{
    console.log("Sever is listening on port 5200...")
})
