import express from "express";
const app = express();
const port = 3000;

let d = new Date();
let today = d.getDay();

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: today, advice: "test"});
});


app.listen(port, () => {   
    console.log("Server is listening on port " + port);
});