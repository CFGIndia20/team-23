const express = require("express")
const mongoose =require("mongoose")
const bodyParser = require("body-parser")
const expressSanitizer = require("express-sanitizer")
const methodOverride = require("method-override")
const passport = require("passport")
const passportLocal = require("passport-local")
const expressSession = require("express-session")
// var User = require("./User.js")
// var Project = require("./Project.js")
// var Comment = require("./Comment.js")
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");

var app = express()

app.set("views","./ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSanitizer())
app.use(methodOverride("_method"))

// passport.use(new passportLocal(User.authenticate()))
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

app.use(expressSession({
	secret:"qwerty",
	resave:false,
	saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(function(req,res,next){
	res.locals.user = req.user
	next()
})
 
mongoose.connect("mongodb+srv://admin:admin@cluster0.gkf3j.mongodb.net/nudge?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})

app.use("/", indexRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT || 3000,"127.0.0.1",function(){
	console.log("Server is Running.")
})