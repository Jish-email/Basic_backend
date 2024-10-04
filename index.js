require('dotenv').config()


const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/login', (req,res)=>{ /// make request and give response 
    res.send('<h1>jishan khan </h1>') /// give res as send 
})

app.get("/mypage",(req,res)=>{
    res.send("new one ")

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})