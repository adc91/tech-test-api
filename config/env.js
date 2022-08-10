const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    appUrl: process.env.APP_URL,
    mongoUrl: process.env.MONGO_URL,
};
