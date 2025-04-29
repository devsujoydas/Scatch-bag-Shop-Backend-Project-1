const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express()
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))



app.get("/", async (req, res) => {
    res.render("index")
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})