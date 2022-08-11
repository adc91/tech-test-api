const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongoDb: {
        host: process.env.MONGO_HOST,
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
    },
};
