// const express = require("express"); when type === commonjs in package.json

// now type = module in common js;
import express from "express"; 
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import {clerkMiddleware} from "@clerk/express";
import {cors} from "cors";
dotenv.config({ path: "./.env" });
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: FRONTEND_URL, credentials: true })); // cors middleware to allow cross-origin requests
app.use(clerkMiddleware()); // middleware to verify the request is from clerk and add user info to req.auth

app.get("/",(req,res)=>{
    const {text,image,video} = req.body; 
    res.status(200).json({message:"Hello from backend"});
})
app.listen(3000,()=>{
    connectDB();
    console.log("port",process.env.PORT)
});
console.log("dotenv", process.env.PORT);