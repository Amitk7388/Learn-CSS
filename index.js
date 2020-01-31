const express = require("express")
const path = require("path")

const app = express()
app.use(express.static(__dirname));

app.get("/", function(req, res){
    console.log("this funcntion is workinf")
    res.sendFile(path.join(__dirname+'/index.html'))
})


const PORT = 3999


app.listen(PORT, function(){
    console.log(`Server is working on this ${PORT}`)
})
