const express = require("express")
const app = express()

app.get("/", function(req, res){
    const url = ""  //paste the api
    https.get(url, function(response){
        console.log(response.statusCode)
    })
    res.send("server is up")
})

app.listen(3000, function(){
    console.log("your port has been started")
})