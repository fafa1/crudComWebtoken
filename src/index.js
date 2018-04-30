const express = require('express')
const bodyParser = require('body-parser')

const porta = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/*
app.get('/', (req, res) =>{
    res.send('OKhh')
})
*/
require('./controller/authController')(app) // o app para ser usado noutro arquivo sem a necessidade de defini-la
 
app.listen(porta, () =>{
    console.log(`servidor esta ainda  executando na porta ${porta}.`)
})
