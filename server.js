const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks.js");
const food = require("./models/food.js")

//Routes:
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})
app.get("/drinks", function(req, res){
    res.render("drinks_index.ejs", {
        allDrinks: drinks
    })
})
app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id]
    })
})
app.get("/food/", (req, res) => {
    res.render("food_index.ejs", {
        allFood: food
    })
})
app.get("/food/:id", (req, res)=>{
    res.render("food_show.ejs", {
        food: food[req.params.id]
    })
})


// Set up the server to listen:
app.listen(port, () => {
    console.log("This server is listening on port", port);
})
