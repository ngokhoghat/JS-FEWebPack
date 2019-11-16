const express = require("express");
const app = express();

const port = 8080;


app.get('/', function(req, res) {
    res.send("<p>hello express!!!</p>")
})

app.listen(port, function() {
    console.log("servet listening in port " + port);
})