const mongoose = require("mongoose");

const { mongoUrl } = require("../config/env");

// Mongo
mongoose.connect(`mongodb://${mongoUrl}/movies-app`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
    title: String,
    cover: String,
    actors: [Array],
});

module.exports = mongoose.model("Movie", movieSchema);
