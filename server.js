const express = require("express");
const app = express();
const port = 3000;

//Routes:
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// Set up the server to listen:
app.listen(port, () => {
    console.log("This server is listening on port", port);
})
