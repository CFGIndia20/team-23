const express = require("express")
const mongoose =require("mongoose")
const bodyParser = require("body-parser")

var app = express()

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://admin:admin@cluster0.gkf3j.mongodb.net/nudge?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})

app.use("/", require('./routes/index'))
app.use("/admin", require("./routes/admin"));
app.use("/student", require("./routes/admin"));

app.listen(process.env.PORT || 3000,"127.0.0.1",function(){
	console.log("Server is Running.")
})