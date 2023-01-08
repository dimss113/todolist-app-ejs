const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date)
// console.log(date()) //calling the function getDate();

const app = express();

const PORT = 3000;

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItem = [];
let position = "";

app.use(express.static("public"));

// configure server js
/*
https://www.topcoder.com/thrive/articles/using-ejs-template-engine-with-express-js 
*/
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT || PORT, function(req, res){
    console.log("server is running on port " + PORT);
});

app.get("/", function(req,res){
    
    position = "lists"

    res.render("list", {listTitle: date.getDate(), newListItem: items, position: position});

});

app.post("/", function (req, res) {

    let newItem = req.body.newItem;

    if(req.body.list === "Work"){
        workItem.push(newItem);
        res.redirect("/work");
    }else{
        items.push(newItem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    
    position = "works";

    res.render("list", {listTitle: "Work List", newListItem: workItem, position: position});

});

app.post("/work", function(req, res){

    let item = req.body.newItem;

    workItem.push(item);

    res.redirect("/work");

});

app.post("/getToWork", function(req, res){
    res.redirect("/work");
});

app.post("/backToList", function(req, res){
    res.redirect("/");
});