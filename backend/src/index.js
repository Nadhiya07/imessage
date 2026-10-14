// const express = require("express"); when type === commonjs in package.json

// now type = module in common js;
import express from "express"; 
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

app.listen(3000,()=>console.log("port",process.env.PORT));
console.log("dotenv", process.env.PORT);