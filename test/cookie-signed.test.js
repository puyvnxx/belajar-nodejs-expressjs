import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";



const app = express();
app.use(cookieParser("SECRETKEYRAHASIA"));
app.use(express.json());

app.get(`/`, (req, res) =>{
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
});

app.post(`/Login`, (req,res) =>{
    const name = req.body.name;
    res.cookie("Login", name, {path: "/",signed:true});
    res.send(`Hello ${name}`);
})

test("Test Cookie Read", async () =>{
    const response = await request(app).get("/")
    .set("Cookie", "Login=s%3APuy.wd0CiAySvtBipHdxgwX5kocjb2hzeyy%2B1mlrDuiUJGk; Path=/");
    expect(response.text).toBe("Hello Puy");
});

test("Test Cookie Write", async () =>{
    const response = await request(app).post("/login")
        .send({name: "Puy"});
    console.info(response.get("Set-Cookie"))
    expect(response.get("Set-Cookie").toString()).toContain("Puy");
    expect(response.text).toBe("Hello Puy")
})