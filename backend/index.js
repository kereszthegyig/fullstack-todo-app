require('dotenv').config();
var express = require("express");
var app = express();
var todoRoutes = require("./routes/todos");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/todos", todoRoutes);
//var PORT = 8081;
app.listen(process.env.PORT, function(){
    console.log("Server has started on port " + process.env.PORT)
})
