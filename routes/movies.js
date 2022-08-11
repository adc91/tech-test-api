const express = require("express");
const formidableMiddleware = require("express-formidable");
const Movie = require("../models/movieModel");

const router = express.Router();

router.get("/", function (req, res) {
    Movie.find({})
        .sort({ _id: -1 })
        .limit(5)
        .exec(function (err, movies) {
            res.send(movies);
        });
});

router.get("/:id", function (req, res) {
    Movie.findById(req.params.id).exec(function (err, movie) {
        res.send(movie);
    });
});

router.post(
    "/",
    formidableMiddleware({ multiple: false }),
    function (req, res) {
        let actors = JSON.parse(req.fields.actors);
        delete actors.photo;

        const movie = new Movie({
            title: req.fields.title,
            description: req.fields.description,
            cover: req.fields.cover,
            actors: actors,
        });

        movie.save().then(
            () => res.json({ success: true }),
            (err) => res.json({ success: false })
        );
    }
);

router.delete("/", async (req, res) => {
    try {
        await Movie.deleteMany();
        return res.json({ success: true });
    } catch (err) {
        res.json({ success: false });
    }
});

module.exports = router;
