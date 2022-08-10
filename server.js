const express = require("express");
const cors = require("cors");

const { port } = require("./config/env");

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Public images
app.use(express.static("uploads"));

// Routes
const moviesRouter = require("./routes/movies");
const uploadRoutes = require("./routes/upload.js");

app.use("/movies", moviesRouter);
app.use("/upload", uploadRoutes);

app.listen(port, () => {
    console.log("Server up and listening...");
});
