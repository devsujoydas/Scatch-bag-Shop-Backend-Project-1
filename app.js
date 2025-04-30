// imports packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// imports database connection and Routers from local
const db = require('./config/mongoose-connection');
const onwersRouter = require('./routes/onwersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');



const app = express()
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/onwers", onwersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)

app.get("/", async (req, res) => {
    res.render("index")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})