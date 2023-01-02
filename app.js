const path = require("path")

const express = require("express");
const { dirname } = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname,"public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Se en el puerto ${PORT}`);
});

//VERBO "GET" HTTP
app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"views/home.html"))
});

app.get("/register",(req,res) => {
    res.sendFile(path.resolve(__dirname,"views/register.html"))
});

app.get("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname,"views/login.html"))
});
