const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks.js");

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
    res.send(req.params.id);
})


// Set up the server to listen:
app.listen(port, () => {
    console.log("This server is listening on port", port);
})
