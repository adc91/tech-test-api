const express = require("express");
const formidableMiddleware = require("express-formidable");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.json([]);
});

router.post(
  "/",
  formidableMiddleware({ multiple: false }),
  function (req, res, next) {
    console.log("fields", req.fields);
    console.log("files", req.files);

    res.json({ success: true });
  }
);

module.exports = router;
