const express = require("express");
const fileUpload = require("express-fileupload");

const { appUrl } = require("../config/env");

const router = express.Router();

router.post("/images", fileUpload(), (req, res) => {
    if (req.files) {
        let file = req.files.file;

        // checking file size - max size - 1 mb
        if (file.size > 1048576) res.status(413).send("Payload too large");

        const filename = new Date().getTime() + "_" + file.name;

        file.mv("./uploads/images/" + filename, function (error) {
            if (error) {
                res.status(500).json({
                    message: "Error while uploading file",
                });
            } else {
                res.json({
                    status: true,
                    message: "File uploaded successfully",
                    data: {
                        file: filename,
                        url: `${appUrl}/images/${filename}`,
                    },
                });
            }
        });
    } else {
        res.status(400).send({ message: "No file uploaded" });
    }
});

module.exports = router;
