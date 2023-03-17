import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";



const app = express();
app.use(cookieParser());
app.use(express.json());

app.get(`/`, (req, res) =>{
    const name = req.cookies["name"];
    res.send(`Hello ${name}`);
});

app.post(`/Login`, (req,res) =>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/"});
    res.send(`Hello ${name}`);
})

test("Test Cookie Read", async () =>{
    const response = await request(app).get("/")
    .set("Cookie", "name=Puy;author=Ahmad Dzulfikar Fauzi");
    expect(response.text).toBe("Hello Puy");
});

test("Test Cookie Write", async () =>{
    const response = await request(app).post("/login")
        .send({name: "Puy"});
    expect(response.get("Set-Cookie").toString()).toContain("Login=Puy; Path=/");
    expect(response.text).toBe("Hello Puy")
})