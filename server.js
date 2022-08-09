const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
const moviesRouter = require("./routes/movies");
const uploadRoutes = require("./routes/upload.js");

app.use("/movies", moviesRouter);
app.use("/upload", uploadRoutes);
//

app.listen(port, () => {
  console.log("Server up and listening...");
});
