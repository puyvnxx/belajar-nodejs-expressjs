import express from "express";
import request from "supertest";


const app = express();

app.get(`/`, (req, res) =>{
    res.set({
        "X-Powered-By": "Ahmad Dzulfikar Fauzi",
        "X-Author": "Puy"
    });
    res.send(`Hello Response`);
});

test("Test Response", async () =>{
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response");
    expect(response.get("X-Powered-by")).toBe("Ahmad Dzulfikar Fauzi");
    expect(response.get("X-Author")).toBe("Puy");
});