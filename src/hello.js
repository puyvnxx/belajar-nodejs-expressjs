import express from "express";

const app = express();

app.get(`/`, (req, res) =>{
    res.send("Hello World");
});

app.get(`/puy`, (req, res) =>{
    res.send("Hello puy");
});


app.listen(3001,()=>{
    console.info("Server started on port 3001")
});