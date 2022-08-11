const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const { s3 } = require("./env");

const space = new aws.S3({
    endpoint: s3.endpoint,
    accessKeyId: s3.accessKey,
    secretAccessKey: s3.secretKey,
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(
            new AppError("Not an image! Please upload images only.", 400),
            false
        );
    }
};

const upload = multer({
    storage: multerS3({
        s3: space,
        acl: "public-read",
        bucket: s3.bucket,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            const filename = new Date().getTime() + "_" + file.originalname;
            cb(null, `images/${filename}`);
        },
    }),
    fileFilter: multerFilter,
});

const type = upload.single("file");

module.exports = type;
