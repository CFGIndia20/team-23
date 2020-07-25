var express = require("express")
var mongoose =require("mongoose")
var bodyParser = require("body-parser")
var expressSanitizer = require("express-sanitizer")
var methodOverride = require("method-override")
var passport = require("passport")
var passportLocal = require("passport-local")
var passportLocalMongoose = require("passport-local-mongoose")
var expressSession = require("express-session")
// var User = require("./User.js")
// var Project = require("./Project.js")
// var Comment = require("./Comment.js")

var app = express()

app.set("views","./ejs")

app.use(express.static("./css"))
app.use(express.static("./js"))
app.use(express.static("./ejs"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSanitizer())
app.use(methodOverride("_method"))

passport.use(new passportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

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

mongoose.connect("mongodb://localhost:27017/CroudFunding",{useNewUrlParser:true})

var server = app.listen("3000","127.0.0.1",function(){
	console.log("Server is Running.")
	console.log(server.address().port+" "+server.address().address)
})