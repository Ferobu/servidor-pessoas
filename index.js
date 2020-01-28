const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

 
let pessoas = [
    {
        nome: "Fernando",id:1
    },
    {
        nome: "Andre",id:2
    }
]


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.route("/pessoas")
    .get(function (req, res){
        res.status(200).send({data : pessoas})
    })
    .post(function (req, res){  
        console.log(req.body);
        
        pessoas.push(req.body)
        res.status(200).send({data : pessoas})
    })




app.route('/pessoas/:id')
    .get(function (req, res){
        let pessoa = pessoas.find(item => req.params.id == item.id)
        if(!pessoa){
            res.status(404).send({message:"SE FODEU KK"})
        }
        else{
            res.status(200).send({data : pessoa.nome})
        }

    })
    .delete(function (req, res){
        pessoas = pessoas.filter(item => item.id != req.params.id)
        res.status(200).send({data: pessoas})
    })

 
app.listen(3000)

console.log("Hello Mundo")