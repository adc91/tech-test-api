const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongoDb: {
        host: process.env.MONGO_HOST,
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
    },
    s3: {
        bucket: process.env.S3_BUCKET,
        endpoint: process.env.S3_ENDPOINT,
        accessKey: process.env.S3_ACCESS_KEY,
        secretKey: process.env.S3_SECRET_KEY,
    },
};
