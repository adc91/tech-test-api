const mongoose = require("mongoose");

const { mongoDb } = require("../config/env");

// Mongo
mongoose.connect(
    `mongodb+srv://${mongoDb.username}:${mongoDb.password}@${mongoDb.host}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    cover: String,
    actors: Object,
});

module.exports = mongoose.model("Movie", movieSchema);
