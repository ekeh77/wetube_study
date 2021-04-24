import express from "express";
import morgan from  "morgan";
import helmet from "helmet";
import cokieParser from "cookie-parser";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => 
console.log(`Listening on: http://localhost:${PORT}`);

const handlehome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on my profile")

app.use(cookieParser());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(helmet());

app.use(morgan("dev"));


app.get("/", handlehome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening)

/*
// respond with "hello world" when a GET request in made to the homepage
app.get('/', function(req, res){
    res.send('hello world');
})
*/