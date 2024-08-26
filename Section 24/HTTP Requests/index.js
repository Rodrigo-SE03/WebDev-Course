import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello")
    
});

app.get("/teste", (req, res) => {
    res.send("<h1>test</h1>")
    
});

app.listen(port, () => {   
    console.log("Server is listening on port " + port);
});