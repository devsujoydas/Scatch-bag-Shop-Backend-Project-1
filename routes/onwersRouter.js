const express = require('express');
const router = express.Router();
const onwerModel = require('../models/owner-model');


if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        let onwers = await onwerModel.find()
        if (onwers.length > 1) {
            return res
                .status(504)
                .send("You dont have permission to create a new onwer")
        }

        let { fullname, email, password } = req.body;

        let createdOwner = await onwerModel.create({
            fullname,
            email,
            password,
        })
        res.status(201).send(createdOwner)
    })

}



router.get("/", (req, res) => {
    res.render("index")
})




module.exports = router;








