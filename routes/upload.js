const express = require("express");
const uploader = require("../config/uploader");

const router = express.Router();

router.post("/images", uploader, async function (req, res, next) {
    res.send({
        success: true,
        message: "Uploaded!",
        data: {
            url: req.file.location,
        },
    });
});

module.exports = router;
