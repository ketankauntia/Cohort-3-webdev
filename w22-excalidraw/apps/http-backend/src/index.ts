import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/signup", (req,res)=>{
    //db call
    res.json({
        userId:"123"
    })
})

app.post("/signin", (req,res)=>{

    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SECRET)

    res.json(token);
})

app.post("/create-room", middleware, (req,res)=>{
    res.json({
        roomId:123
    });
})

app.listen(3001, () => {
    console.log("Server is running on port 3000");
});
