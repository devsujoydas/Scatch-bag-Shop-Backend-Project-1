const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hey this is productsRouter")
})


module.exports = router;
