import express from "express";
import request from "supertest";


const app = express();

app.get(`/products/*.json`, (req, res) =>{
    res.send(req.originalUrl);
});


app.get(`/categories/*(\\d+).json`, (req, res) =>{
    res.send(req.originalUrl);
});



test("Test Route Path", async () =>{
    let response = await request(app).get("/products/puy.json");
    expect(response.text).toBe("/products/puy.json");

    response = await request(app).get("/products/salah.json");
    expect(response.text).toBe("/products/salah.json");

    response = await request(app).get("/categories/33444.json");
    expect(response.text).toBe("/categories/33444.json");

    response = await request(app).get("/categories/salah.json");
    expect(response.status).toBe(404);
});

